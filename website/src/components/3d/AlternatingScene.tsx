'use client';

// @ts-nocheck
import { useGLTF, useTexture } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group, Mesh, MeshStandardMaterial } from 'three';

export interface SodaCanProps {
  flavor?: string;
  scale?: number;
}

const flavorTextures = {
  strawberryLemonade: '/labels/strawberry.png',
  grape: '/labels/grape.png',
  blackCherry: '/labels/cherry.png',
  lemonLime: '/labels/lemon-lime.png',
  watermelon: '/labels/watermelon.png',
};

const metalMaterial = new MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: '#bbbbbb',
});

export function SodaCan({ flavor = 'strawberryLemonade', scale = 2 }: SodaCanProps) {
  const groupRef = useRef<Group>(null);
  const { nodes } = useGLTF('/Soda-can.gltf');
  
  // Carrega todas as texturas
  const textures = useTexture(flavorTextures);
  
  // Aplica a textura correta baseada no flavor
  const labelTexture = textures[flavor as keyof typeof flavorTextures];
  
  useEffect(() => {
    if (labelTexture) {
      labelTexture.flipY = false;
      labelTexture.needsUpdate = true;
    }
  }, [labelTexture]);

  return (
    <group ref={groupRef} scale={scale} rotation={[0, -Math.PI, 0]}>
      {/* Corpo da lata (metal) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as Mesh).geometry}
        material={metalMaterial}
      />
      {/* Label da lata (textura do sabor) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={labelTexture} />
      </mesh>
      {/* Aba da lata (metal) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}

useGLTF.preload('/Soda-can.gltf');