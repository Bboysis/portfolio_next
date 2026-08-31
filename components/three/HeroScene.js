 "use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/* =========================================
   CENTRAL DEVELOPER CORE
========================================= */

function DeveloperCore({ mouse }) {
  const group = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.current.x * 0.3,
      0.04
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.15,
      0.04
    );

    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.12;

    if (ring1.current) {
      ring1.current.rotation.z += delta * 0.35;
    }

    if (ring2.current) {
      ring2.current.rotation.z -= delta * 0.22;
      ring2.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group ref={group} position={[0.4, 0, 0]}>
      {/* =====================================
          OUTER GLOW
      ====================================== */}

      <mesh>
        <sphereGeometry args={[1.05, 32, 32]} />

        <meshStandardMaterial
          color="#071c24"
          emissive="#0a8278"
          emissiveIntensity={0.8}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* =====================================
          CORE
      ====================================== */}

      <mesh>
        <icosahedronGeometry args={[0.72, 2]} />

        <meshStandardMaterial
          color="#12323a"
          emissive="#3ECFC0"
          emissiveIntensity={1.4}
          metalness={0.8}
          roughness={0.18}
          wireframe
        />
      </mesh>

      {/* Inner core */}

      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />

        <meshStandardMaterial
          color="#4FFFE0"
          emissive="#3ECFC0"
          emissiveIntensity={2}
          metalness={0.5}
          roughness={0.1}
        />
      </mesh>

      {/* =====================================
          ORBIT RING 1
      ====================================== */}

      <mesh ref={ring1} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[1.35, 0.025, 16, 100]} />

        <meshBasicMaterial
          color="#4FFFE0"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* =====================================
          ORBIT RING 2
      ====================================== */}

      <mesh ref={ring2} rotation={[0.3, 0.7, 0]}>
        <torusGeometry args={[1.65, 0.018, 16, 100]} />

        <meshBasicMaterial
          color="#3ECFC0"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* =====================================
          SMALL ORBITING NODE 1
      ====================================== */}

      <OrbitNode
        radius={1.35}
        speed={1.2}
        color="#4FFFE0"
      />

      {/* =====================================
          SMALL ORBITING NODE 2
      ====================================== */}

      <OrbitNode
        radius={1.65}
        speed={-0.8}
        color="#38bdf8"
        offset={Math.PI}
      />
    </group>
  );
}


/* =========================================
   ORBITING NODE
========================================= */

function OrbitNode({
  radius,
  speed,
  color,
  offset = 0,
}) {
  const node = useRef();

  useFrame((state) => {
    if (!node.current) return;

    const angle =
      state.clock.elapsedTime * speed + offset;

    node.current.position.x =
      Math.cos(angle) * radius;

    node.current.position.y =
      Math.sin(angle) * radius;
  });

  return (
    <mesh ref={node}>
      <sphereGeometry args={[0.09, 20, 20]} />

      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}
/* =========================================
   FLOATING TECH CARD
========================================= */

function TechCard({
  position,
  color,
  title,
  lines = 3,
}) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      Math.sin(
        state.clock.elapsedTime * 0.5 +
          position[0]
      ) * 0.12;
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.6}
    >
      <group
        ref={group}
        position={position}
      >
        {/* Card */}

        <mesh>
          <boxGeometry
            args={[1.65, 1.05, 0.08]}
          />

          <meshStandardMaterial
            color="#09131f"
            metalness={0.65}
            roughness={0.22}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Top accent */}

        <mesh position={[0, 0.32, 0.06]}>
          <boxGeometry
            args={[0.95, 0.035, 0.02]}
          />

          <meshBasicMaterial color={color} />
        </mesh>

        {/* Fake code lines */}

        {Array.from({ length: lines }).map(
          (_, index) => (
            <mesh
              key={index}
              position={[
                -0.35 +
                  (index % 2) * 0.08,
                0.08 - index * 0.22,
                0.06,
              ]}
            >
              <boxGeometry
                args={[
                  index % 2 === 0
                    ? 0.75
                    : 0.55,
                  0.035,
                  0.02,
                ]}
              />

              <meshBasicMaterial
                color={
                  index === 0
                    ? color
                    : "#64748b"
                }
              />
            </mesh>
          )
        )}

        {/* Tech title */}

        <TechLabel
          position={[0, -0.65, 0.08]}
          text={title}
          color={color}
        />
      </group>
    </Float>
  );
}


/* =========================================
   SIMPLE TECH LABEL
   (using geometry instead of Text
    for better performance)
========================================= */

function TechLabel({
  position,
  text,
  color,
}) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry
          args={[
            Math.min(
              text.length * 0.11,
              0.9
            ),
            0.035,
            0.02,
          ]}
        />

        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}


/* =========================================
   DATABASE NODE
========================================= */

function DatabaseNode() {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y += 0.01;

    group.current.position.y =
      -1.65 +
      Math.sin(
        state.clock.elapsedTime * 1.2
      ) * 0.08;
  });

  return (
    <group
      ref={group}
      position={[2.45, -1.65, -0.5]}
    >
      {/* Database */}

      <mesh>
        <cylinderGeometry
          args={[0.45, 0.45, 0.65, 32]}
        />

        <meshStandardMaterial
          color="#0b3a3a"
          emissive="#167c78"
          emissiveIntensity={0.8}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Top ring */}

      <mesh position={[0, 0.33, 0]}>
        <torusGeometry
          args={[0.45, 0.025, 16, 50]}
        />

        <meshBasicMaterial color="#4FFFE0" />
      </mesh>

      {/* Bottom ring */}

      <mesh position={[0, -0.33, 0]}>
        <torusGeometry
          args={[0.45, 0.025, 16, 50]}
        />

        <meshBasicMaterial
          color="#3ECFC0"
        />
      </mesh>
    </group>
  );
}


/* =========================================
   NETWORK CONNECTION
========================================= */

function Connection({
  start,
  end,
  color = "#3ECFC0",
}) {
  const ref = useRef();
  const geometry = useMemo(() => {
    const curve =
      new THREE.LineCurve3(
        new THREE.Vector3(...start),
        new THREE.Vector3(...end)
      );

    const points =
      curve.getPoints(30);

    return new THREE.BufferGeometry()
      .setFromPoints(points);
  }, [start, end]);

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial
        color={color}
        transparent
        opacity={0.35}
      />
    </line>
  );
}


/* =========================================
   PARTICLE UNIVERSE
========================================= */

function ParticleField() {
  const points = useMemo(() => {
    const count = 450;

    const positions =
      new Float32Array(count * 3);

    for (
      let i = 0;
      i < count;
      i++
    ) {
      positions[i * 3] =
        (Math.random() - 0.5) * 11;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 8;

      positions[i * 3 + 2] =
        (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y +=
        delta * 0.012;

      ref.current.rotation.x +=
        delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={450}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#3ECFC0"
        size={0.025}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}


/* =========================================
   MAIN UNIVERSE
========================================= */

function DeveloperUniverse({ mouse }) {
  return (
    <group>
      {/* CENTRAL CORE */}

      <DeveloperCore mouse={mouse} />

      {/* TECH CARDS */}

      <TechCard
        position={[-2.4, 1.55, -0.8]}
        color="#4FFFE0"
        title="FRONTEND"
      />

      <TechCard
        position={[-2.5, -1.45, -1]}
        color="#38bdf8"
        title="BACKEND"
      />

      <TechCard
        position={[2.45, 1.45, -1]}
        color="#a78bfa"
        title="NEXT.JS"
      />

      {/* DATABASE */}

      <DatabaseNode />

      {/* CONNECTIONS */}

      <Connection
        start={[0.4, 0.2, 0]}
        end={[-2.4, 1.55, -0.8]}
      />

      <Connection
        start={[0.4, -0.2, 0]}
        end={[-2.5, -1.45, -1]}
        color="#38bdf8"
      />

      <Connection
        start={[0.4, 0.2, 0]}
        end={[2.45, 1.45, -1]}
        color="#a78bfa"
      />

      <Connection
        start={[0.4, -0.25, 0]}
        end={[2.45, -1.65, -0.5]}
        color="#4FFFE0"
      />
    </group>
  );
}


/* =========================================
   HERO SCENE
========================================= */

export default function HeroScene() {
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    mouse.current.x =
      (event.clientX / window.innerWidth) *
        2 -
      1;

    mouse.current.y =
      (event.clientY / window.innerHeight) *
        2 -
      1;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 h-full w-full"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0.1, 7.2],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference:
            "high-performance",
        }}
      >
        {/* =========================
            LIGHTING
        ========================== */}

        <ambientLight
          intensity={0.8}
        />

        <pointLight
          position={[4, 4, 5]}
          intensity={28}
          distance={10}
          color="#4FFFE0"
        />

        <pointLight
          position={[-4, 2, 3]}
          intensity={18}
          distance={8}
          color="#38bdf8"
        />
        <pointLight
          position={[0, -3, 3]}
          intensity={12}
          distance={7}
          color="#a78bfa"
        />

        {/* =========================
            TECH UNIVERSE
        ========================== */}

        <DeveloperUniverse mouse={mouse} />

        {/* =========================
            PARTICLES
        ========================== */}

        <ParticleField />
      </Canvas>
    </div>
  );
}