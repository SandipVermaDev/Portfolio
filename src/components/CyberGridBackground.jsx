import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { extend, useFrame, useThree, Canvas } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Define custom shader material
const CyberShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(),
    uResolution: new THREE.Vector2(),
    uClick: 0.0,
  },
  // Vertex Shader
  `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    uniform float uClick;
    varying vec2 vUv;

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution;

      // Background color: dark slate
      vec3 backgroundColor = vec3(0.05, 0.08, 0.12);

      // Neon grid colors
      vec3 pink = vec3(0.78, 0.0, 1.0);
      vec3 purple = vec3(0.48, 0.0, 1.0);
      vec3 cyan = vec3(0.0, 1.0, 0.9);
      float pulse = 0.5 + 0.5 * sin(uTime * 1.5);
      vec3 gridColor = mix(mix(pink, purple, pulse), cyan, pulse);

      // Normalize mouse
      vec2 mouseNorm = uMouse * 0.5 + 0.5;
      float distToMouse = distance(st, mouseNorm);

      // Ripple distortion (only when clicked)
      float ripple = sin(20.0 * distToMouse - uTime * 4.0) / (20.0 * distToMouse + 0.1);
      float distortionStrength = uClick * 0.015;
      vec2 distortedUV = st + distortionStrength * ripple * normalize(st - mouseNorm);

      // Grid detection
      float gridX = step(0.98, fract(distortedUV.x * 20.0 - uTime * 0.5));
      float gridY = step(0.98, fract(distortedUV.y * 20.0 + uTime * 0.5));
      float grid = gridX + gridY;

      vec3 finalColor = mix(backgroundColor, gridColor * 0.5, clamp(grid, 0.0, 1.0));

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ CyberShaderMaterial });

const CyberShaderPlane = ({ clickState }) => {
  const ref = useRef();
  const { size, mouse } = useThree();

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uTime = clock.getElapsedTime();
      ref.current.uMouse = new THREE.Vector2(mouse.x, mouse.y);
      ref.current.uResolution = new THREE.Vector2(size.width, size.height);
      ref.current.uClick = clickState.current;
    }
  });

  return (
    <mesh scale={[size.width, size.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <cyberShaderMaterial ref={ref} />
    </mesh>
  );
};

const CyberShaderBackground = () => {
  const clickState = useRef(0);

  const handleClick = () => {
    clickState.current = 1;
    setTimeout(() => (clickState.current = 0), 500); // Ripple lasts for 500ms
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-auto"
      onClick={handleClick}
    >
      <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 5] }}>
        <CyberShaderPlane clickState={clickState} />
      </Canvas>
    </div>
  );
};

export default CyberShaderBackground;
