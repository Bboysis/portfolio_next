 "use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function DeveloperWorkspace({ mouse }) {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.current.x * 0.25,
      0.04
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.12,
      0.04
    );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={group} position={[0, -0.3, 0]}>

      {/* =========================
          DESK
      ========================= */}
      <mesh position={[0, -1.35, 0]}>
        <boxGeometry args={[4.8, 0.18, 2.2]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* =========================
          MONITOR
      ========================= */}
      <group position={[0, 0.35, 0]}>

        {/* Monitor frame */}
        <mesh>
          <boxGeometry args={[3.1, 1.9, 0.16]} />
          <meshStandardMaterial
            color="#090d16"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.095]}>
          <boxGeometry args={[2.75, 1.55, 0.025]} />
          <meshStandardMaterial
            color="#07141c"
            emissive="#063d3b"
            emissiveIntensity={1.5}
          />
        </mesh>

        {/* Code lines */}
        <mesh position={[-0.65, 0.45, 0.12]}>
          <boxGeometry args={[1.1, 0.06, 0.025]} />
          <meshBasicMaterial color="#4FFFE0" />
        </mesh>

        <mesh position={[-0.45, 0.2, 0.12]}>
          <boxGeometry args={[1.5, 0.05, 0.025]} />
          <meshBasicMaterial color="#3ECFC0" />
        </mesh>

        <mesh position={[-0.55, -0.05, 0.12]}>
          <boxGeometry args={[1.3, 0.05, 0.025]} />
          <meshBasicMaterial color="#4FFFE0" />
        </mesh>

        <mesh position={[-0.35, -0.3, 0.12]}>
          <boxGeometry args={[1.6, 0.05, 0.025]} />
          <meshBasicMaterial color="#3ECFC0" />
        </mesh>

        {/* Monitor stand */}
        <mesh position={[0, -1.15, 0]}>
          <boxGeometry args={[0.22, 0.65, 0.22]} />
          <meshStandardMaterial
            color="#1f2937"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>

        {/* Monitor base */}
        <mesh position={[0, -1.48, 0]}>
          <boxGeometry args={[1.1, 0.08, 0.55]} />
          <meshStandardMaterial
            color="#111827"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </group>

      {/* =========================
          KEYBOARD
      ========================= */}
      <mesh position={[0, -1.05, 0.85]} rotation={[-0.12, 0, 0]}>
        <boxGeometry args={[2.4, 0.12, 0.75]} />
        <meshStandardMaterial
          color="#151b26"
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>

      {/* Keyboard glow */}
      {Array.from({ length: 12 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            -0.85 + (i % 6) * 0.34,
            -0.96,
            0.65 + Math.floor(i / 6) * 0.25,
          ]}
        >
          <boxGeometry args={[0.2, 0.025, 0.12]} />
          <meshBasicMaterial color="#3ECFC0" />
        </mesh>
      ))}

      {/* =========================
          MOUSE
      ========================= */}
      <mesh position={[1.55, -1.05, 0.75]}>
        <sphereGeometry args={[0.28, 24, 16]} />
        <meshStandardMaterial
          color="#111827"
          metalness={0.6}
          roughness={0.25}
        />
      </mesh>
      {/* =========================
          FLOATING TECH CORE
      ========================= */}
      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={1}
      >
        <mesh position={[2.25, 1.55, 0]}>
          <icosahedronGeometry args={[0.42, 1]} />
          <meshStandardMaterial
            color="#3ECFC0"
            emissive="#0a8278"
            emissiveIntensity={2}
            metalness={0.8}
            roughness={0.15}
            wireframe
          />
        </mesh>
      </Float>

    </group>
  );
}

/* =========================
   PARTICLES
========================= */

function ParticleField() {
  const points = useMemo(() => {
    const positions = new Float32Array(300 * 3);

    for (let i = 0; i < 300; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 10;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 7;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={300}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#3ECFC0"
        size={0.025}
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

/* =========================
   MAIN SCENE
========================= */

export default function HeroScene() {
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    mouse.current.x =
      (event.clientX / window.innerWidth) * 2 - 1;

    mouse.current.y =
      (event.clientY / window.innerHeight) * 2 - 1;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 h-full w-full"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0.2, 7],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        {/* Lighting */}
        <ambientLight intensity={1.2} />

        <pointLight
          position={[4, 4, 5]}
          intensity={30}
          distance={10}
          color="#4FFFE0"
        />

        <pointLight
          position={[-4, 2, 3]}
          intensity={15}
          distance={8}
          color="#3ECFC0"
        />

        <pointLight
          position={[0, -2, 2]}
          intensity={10}
          distance={6}
          color="#167c78"
        />

        {/* 3D workspace */}
        <DeveloperWorkspace mouse={mouse} />

        {/* Particles */}
        <ParticleField />

      </Canvas>
    </div>
  );
}