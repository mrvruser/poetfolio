"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 🌑 DARK THEME: Delicate Neural Lattice (Offset to Right Backdrop)
function NeuralLattice() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0, 0]} scale={1.2}>
      {/* Outer subtle icosahedral cage */}
      <mesh>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#00F5D4"
          wireframe
          transparent
          opacity={0.16}
        />
      </mesh>

      {/* Internal nucleus */}
      <mesh>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#00F5D4"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

// ☀️ LIGHT THEME: Subtle Golden Geometric Form (Offset to Right Backdrop)
function LiteraryOrigami() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[1.4, 0, 0]} scale={1.1}>
      {/* Gentle dodecahedral paper geometry */}
      <mesh>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#B8860B"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Floating golden page plane */}
      <mesh position={[0.5, 0.4, 0.2]} rotation={[0.4, 0.6, 0.1]}>
        <planeGeometry args={[1.0, 1.4]} />
        <meshStandardMaterial
          color="#EADECA"
          side={THREE.DoubleSide}
          transparent
          opacity={0.35}
          roughness={0.8}
        />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.6 : 1.0} />
        <directionalLight position={[6, 8, 5]} intensity={isDark ? 0.8 : 1.4} />
        <pointLight position={[-4, -3, -1]} color={isDark ? "#00F5D4" : "#B8860B"} intensity={1.2} />

        {isDark ? <NeuralLattice /> : <LiteraryOrigami />}
      </Canvas>
    </div>
  );
}
