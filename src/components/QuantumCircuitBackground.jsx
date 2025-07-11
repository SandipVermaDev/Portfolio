import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Custom shader material for quantum gates
const QuantumGateShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uMouse: new THREE.Vector2(0.5, 0.5),
        uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
        uHover: 0,
        uGateType: 0, // 0 = Hadamard, 1 = CNOT, 2 = Phase
    },
    // Vertex Shader
    `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normal;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `,
    // Fragment Shader
    `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uHover;
  uniform float uGateType;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  // Quantum gate colors
  vec3 hadamardColor = vec3(0.0, 1.0, 0.9);    // Cyan
  vec3 cnotColor = vec3(0.78, 0.0, 1.0);        // Purple
  vec3 phaseColor = vec3(1.0, 0.5, 0.0);        // Orange
  
  // Glow function
  float glow(float d, float str, float thickness) {
    return thickness / pow(d, str);
  }
  
  // Distance to line segment
  float lineSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a;
    vec2 ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
  }
  
  void main() {
    // Center coordinates
    vec2 center = vUv - 0.5;
    
    // Gate shape (hexagon)
    float a = atan(center.x, center.y) + uTime * 0.5;
    float r = length(center);
    float hex = abs(cos(a * 3.0) * 0.22 + 0.78) - r;
    
    // Gate symbol based on type
    float symbol = 1.0;
    if (uGateType < 0.5) {
      // Hadamard (H)
      symbol = min(
        length(center - vec2(0.0, 0.0)) - 0.15,
        max(abs(center.x) - 0.05, abs(center.y) - 0.15)
      );
    } else if (uGateType < 1.5) {
      // CNOT (⊕)
      symbol = min(
        length(center) - 0.1,
        max(length(center - vec2(0.0, 0.12)) - 0.03, abs(center.x) - 0.15)
      );
    } else {
      // Phase (P)
      symbol = min(
        length(center - vec2(0.0, 0.0)) - 0.15,
        max(abs(center.x - center.y) - 0.02, abs(center.x + center.y) - 0.02)
      );
    }
    
    // Gate color based on type
    vec3 gateColor = mix(mix(hadamardColor, cnotColor, uGateType), phaseColor, max(0.0, uGateType - 1.0));
    
    // Calculate distance to mouse
    vec2 mouse = uMouse * uResolution;
    vec2 fragPos = gl_FragCoord.xy;
    float distToMouse = distance(fragPos, mouse);
    
    // Hover effect
    float hoverEffect = smoothstep(0.0, 150.0, 150.0 - distToMouse) * uHover * 2.0;
    
    // Gate glow
    float gateGlow = glow(hex, 0.8, 0.05) + glow(symbol, 1.2, 0.03);
    vec3 finalColor = gateColor * (gateGlow * (0.5 + hoverEffect));
    
    // Entanglement effect
    if (distToMouse < 150.0) {
      float pulse = sin(uTime * 5.0 + distToMouse * 0.1) * 0.5 + 0.5;
      finalColor += vec3(1.0, 1.0, 1.0) * pulse * 0.3 * uHover;
    }
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
  `
);

extend({ QuantumGateShaderMaterial });

// Quantum Gate component
const QuantumGate = ({ position, gateType, hovered, onHover }) => {
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (meshRef.current) {
            meshRef.current.material.uTime = clock.getElapsedTime();
            meshRef.current.material.uHover = hovered ? 1 : 0;
            meshRef.current.material.uGateType = gateType;

            // Subtle floating animation
            meshRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.5 + position[0] * 10) * 0.05;
        }
    });

    return (
        <mesh
            ref={meshRef}
            position={position}
            onPointerOver={() => onHover(true)}
            onPointerOut={() => onHover(false)}
        >
            <circleGeometry args={[0.5, 6]} /> {/* Hexagon shape */}
            <quantumGateShaderMaterial />
        </mesh>
    );
};

// Qubit Particle component
const QubitParticle = ({ position, speed }) => {
    const meshRef = useRef();
    const startPos = useRef(new THREE.Vector3(...position));
    const timeOffset = useRef(Math.random() * 100);
    const pathRadius = useRef(0.5 + Math.random() * 2);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            const t = clock.getElapsedTime() * speed + timeOffset.current;

            // Orbital path with slight randomness
            meshRef.current.position.x = startPos.current.x + Math.sin(t) * pathRadius.current;
            meshRef.current.position.z = startPos.current.z + Math.cos(t * 0.7) * pathRadius.current;
            meshRef.current.position.y = startPos.current.y + Math.cos(t * 1.2) * 0.3;

            // Pulsing scale
            meshRef.current.scale.setScalar(0.5 + Math.sin(t * 3) * 0.1);
        }
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#00ffe7" />
        </mesh>
    );
};

// Connection Lines component
const ConnectionLine = ({ start, end, progress }) => {
    const lineRef = useRef();

    useFrame(() => {
        if (lineRef.current) {
            const points = [];
            points.push(new THREE.Vector3(...start));

            // Add some curvature
            const midX = (start[0] + end[0]) / 2;
            const midY = (start[1] + end[1]) / 2 + 0.5;
            const midZ = (start[2] + end[2]) / 2;

            points.push(new THREE.Vector3(midX, midY, midZ));
            points.push(new THREE.Vector3(...end));

            lineRef.current.geometry.setFromPoints(points);
        }
    });

    return (
        <line ref={lineRef}>
            <bufferGeometry />
            <lineBasicMaterial
                color="#6f00ff"
                transparent
                opacity={0.5 + Math.sin(progress * Math.PI) * 0.3}
            />
        </line>
    );
};

// Main Quantum Circuit component
const QuantumCircuit = ({ mouse }) => {
    const { viewport } = useThree();
    const [gates, setGates] = React.useState([]);
    const [connections, setConnections] = React.useState([]);
    const [hoveredGate, setHoveredGate] = React.useState(null);

    // Initialize gates and connections
    useEffect(() => {
        const newGates = [];
        const newConnections = [];
        const gateTypes = [0, 1, 2]; // Hadamard, CNOT, Phase
        const spacing = 3.5;

        // Create gates in a wider pattern
        for (let x = -4; x <= 4; x += spacing) {
            for (let z = -4; z <= 4; z += spacing) {
                const type = gateTypes[Math.floor(Math.random() * gateTypes.length)];
                // Add random offset to prevent overlapping
                const offsetX = (Math.random() - 0.5) * 1.5;
                const offsetZ = (Math.random() - 0.5) * 1.5;

                newGates.push({
                    id: `${x}-${z}`,
                    position: [x + offsetX, 0, z + offsetZ],
                    type
                });
            }
        }

        // Create connections between gates
        for (let i = 0; i < newGates.length; i++) {
            for (let j = i + 1; j < newGates.length; j++) {
                if (Math.random() > 0.7) {
                    newConnections.push({
                        id: `${i}-${j}`,
                        start: newGates[i].position,
                        end: newGates[j].position,
                        progress: 0
                    });
                }
            }
        }

        setGates(newGates);
        setConnections(newConnections);
    }, []);

    // Update mouse position in shaders
    useFrame(() => {
        gates.forEach(gate => {
            const gateElement = document.querySelector(`[data-gate-id="${gate.id}"]`);
            if (gateElement) {
                const material = gateElement.material;
                if (material) {
                    material.uniforms.uMouse.value = mouse;
                }
            }
        });
    });

    return (
        <group>
            {/* Connection lines */}
            {connections.map((conn, idx) => (
                <ConnectionLine
                    key={conn.id}
                    start={conn.start}
                    end={conn.end}
                    progress={(Math.sin(idx) + 1) / 2}
                />
            ))}

            {/* Quantum gates */}
            {gates.map(gate => (
                <QuantumGate
                    key={gate.id}
                    data-gate-id={gate.id}
                    position={gate.position}
                    gateType={gate.type}
                    hovered={hoveredGate === gate.id}
                    onHover={(isHovered) => setHoveredGate(isHovered ? gate.id : null)}
                />
            ))}

            {/* Qubit particles */}
            {Array.from({ length: 100 }).map((_, i) => (
                <QubitParticle
                    key={i}
                    position={[
                        (Math.random() - 0.5) * viewport.width * 0.8,
                        (Math.random() - 0.5) * viewport.height * 0.5,
                        (Math.random() - 0.5) * 10
                    ]}
                    speed={0.1 + Math.random() * 0.2}
                />
            ))}
        </group>
    );
};

// Main Quantum Circuit Background component
const QuantumCircuitBackground = () => {
    const containerRef = useRef();
    const [mouse, setMouse] = React.useState([0.5, 0.5]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setMouse([x, 1 - y]);
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 pointer-events-auto"
            onMouseMove={handleMouseMove}
        >
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#0c0f14']} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#6f00ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ffe7" />
                <QuantumCircuit mouse={mouse} />
            </Canvas>
        </div>
    );
};

export default QuantumCircuitBackground;