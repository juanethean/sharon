"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function EnjambreParticulas() {
  const ref = useRef<THREE.Points>(null);

  const posiciones = useMemo(() => {
    const cantidad = 800; 
    const posiciones = new Float32Array(cantidad * 3);
    for (let i = 0; i < cantidad; i++) {
      const x = (Math.random() - 0.5) * 40; 
      const y = (Math.random() - 0.5) * 30; 
      const z = (Math.random() - 0.5) * 15; 
      
      posiciones[i * 3] = x;
      posiciones[i * 3 + 1] = y;
      posiciones[i * 3 + 2] = z;
    }
    return posiciones;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group>
      <Points ref={ref} positions={posiciones} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10b981"
          size={0.15} 
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.7}
        />
      </Points>
    </group>
  );
}

export default function FondoParticulas() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full bg-slate-50">
      <Canvas camera={{ position: [0, 0, 10] }}> 
        <EnjambreParticulas />
      </Canvas>
    </div>
  );
}