import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { extend, useFrame, useThree, Canvas } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Define custom shader material
const CyberShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5), // Start at center
    uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    uWaveStrength: 0.02, // Constant wave strength
  },
  // Vertex Shader
  `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader - MOUSE FOLLOW WAVE
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uWaveStrength;
    varying vec2 vUv;

    void main() {
      // Get normalized screen coordinates (0-1) with origin at bottom-left
      vec2 st = gl_FragCoord.xy / uResolution;
      
      // Background color: dark slate
      vec3 backgroundColor = vec3(0.05, 0.08, 0.12);

      // Neon grid colors
      vec3 pink = vec3(0.78, 0.0, 1.0);
      vec3 purple = vec3(0.48, 0.0, 1.0);
      vec3 cyan = vec3(0.0, 1.0, 0.9);
      float pulse = 0.5 + 0.5 * sin(uTime * 1.5);
      vec3 gridColor = mix(mix(pink, purple, pulse), cyan, pulse);

      // Calculate distance to mouse in screen space
      float distToMouse = distance(st, uMouse);

      // Continuous ripple effect
      float ripple = sin(15.0 * distToMouse - uTime * 5.0) * exp(-4.0 * distToMouse);
      vec2 distortedUV = st + uWaveStrength * ripple * normalize(st - uMouse);

      // Grid detection
      float gridX = step(0.98, fract(distortedUV.x * 20.0 - uTime * 0.5));
      float gridY = step(0.98, fract(distortedUV.y * 20.0 + uTime * 0.5));
      float grid = gridX + gridY;

      vec3 finalColor = mix(backgroundColor, gridColor * 0.5, clamp(grid, 0.0, 1.0));

      // Debug: Show red dot at mouse position (uncomment to verify)
      // if (distance(st, uMouse) < 0.01) {
      //   finalColor = vec3(1.0, 0.0, 0.0);
      // }

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ CyberShaderMaterial });

const CyberShaderPlane = ({ shaderRef }) => {
  const ref = useRef();
  const { size } = useThree();
  const lastSize = useRef(size);

  // Reuse vector instances to prevent garbage collection
  const resolutionVec = useRef(new THREE.Vector2());

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
      
      // Only update resolution when it changes
      if (lastSize.current.width !== size.width || lastSize.current.height !== size.height) {
        resolutionVec.current.set(size.width, size.height);
        ref.current.uResolution = resolutionVec.current;
        lastSize.current = size;
      }
    }
  });

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <cyberShaderMaterial 
        ref={(node) => {
          ref.current = node;
          shaderRef.current = node;
        }} 
      />
    </mesh>
  );
};

const CyberShaderBackground = () => {
  const shaderRef = useRef();
  const containerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for touch device
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    const handleMouseMove = (e) => {
      if (!containerRef.current || !shaderRef.current) return;
      
      // Get mouse position relative to the canvas
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height; // Flip Y
      
      // Update shader directly
      shaderRef.current.uMouse.set(x, y);
    };

    const handleTouchMove = (e) => {
      if (!containerRef.current || !shaderRef.current) return;
      e.preventDefault();
      
      const touch = e.touches[0];
      const rect = containerRef.current.getBoundingClientRect();
      const x = (touch.clientX - rect.left) / rect.width;
      const y = 1 - (touch.clientY - rect.top) / rect.height;
      
      shaderRef.current.uMouse.set(x, y);
    };

    // Add event listeners
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMobile]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-auto"
      tabIndex={0}
    >
      <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 5] }}>
        <CyberShaderPlane shaderRef={shaderRef} />
      </Canvas>
    </div>
  );
};

export default CyberShaderBackground;