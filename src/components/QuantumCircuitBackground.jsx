import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

// Qubit Particle component with varied colors
const QubitParticle = ({ position, speed, color }) => {
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
            <meshBasicMaterial color={color} />
        </mesh>
    );
};

// Main Quantum Circuit component
const QuantumCircuit = () => {
    const { viewport } = useThree();
    
    // Define our color palette
    const colors = [
        "#00ffe7",  // Cyan
        "#6f00ff",  // Purple
        "#ff7700"   // Orange
    ];

    return (
        <group>
            {/* Qubit particles with varied colors */}
            {Array.from({ length: 150 }).map((_, i) => {
                const color = colors[Math.floor(Math.random() * colors.length)];
                return (
                    <QubitParticle
                        key={i}
                        position={[
                            (Math.random() - 0.5) * viewport.width,
                            (Math.random() - 0.5) * viewport.height,
                            (Math.random() - 0.5) * 10
                        ]}
                        speed={0.1 + Math.random() * 0.3}
                        color={color}
                    />
                );
            })}
        </group>
    );
};

// Main Quantum Circuit Background component
const QuantumCircuitBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#0c0f14']} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#6f00ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00ffe7" />
                <QuantumCircuit />
            </Canvas>
        </div>
    );
};

export default QuantumCircuitBackground;