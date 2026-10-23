"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function CerebroRespirando() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { nodes } = useGLTF("/cerebro.glb") as any;

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Escala base aumentada a 35.0 para que el modelo destaque más
    const escalaBase = 35.0; 
    // Pulsación ajustada a 0.5 para mantener la proporción de la animación
    const escalaAnimada = escalaBase + Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
    meshRef.current.scale.set(escalaAnimada, escalaAnimada, escalaAnimada);

    const targetX = (state.pointer.x * Math.PI) / 6;
    const targetY = (state.pointer.y * Math.PI) / 6;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.05;
  });

  const nodoMalla = Object.values(nodes).find((n: any) => n.isMesh) as THREE.Mesh | undefined;
  const geometriaCerebro = nodoMalla?.geometry;

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} geometry={geometriaCerebro} position={[0, -0.2, 0]}>
        <meshBasicMaterial 
          color="#10b981" 
          wireframe={true}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function EsferaInteractiva() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1]}>
        <Suspense fallback={null}>
          <CerebroRespirando />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/cerebro.glb");