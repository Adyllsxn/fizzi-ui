'use client'

// @ts-nocheck
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Mesh, MeshStandardMaterial } from 'three'

interface SodaCanProps {
  flavor?: string
  scale?: number
}

const flavorTextures = {
  lemonLime: '/labels/lemon-lime.png',
  grape: '/labels/grape.png',
  blackCherry: '/labels/cherry.png',
  strawberryLemonade: '/labels/strawberry.png',
  watermelon: '/labels/watermelon.png',
}

const metalMaterial = new MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: '#bbbbbb',
})

const labelMaterial = new MeshStandardMaterial({
  roughness: 0.15,
  metalness: 0.7,
})

export function SodaCan({ flavor = 'strawberryLemonade', scale = 2 }: SodaCanProps) {
  const groupRef = useRef<Group>(null)
  const { nodes } = useGLTF('/Soda-can.gltf')
  const labels = useTexture(flavorTextures)

  // Corrige a orientação das texturas
  labels.strawberryLemonade.flipY = false
  labels.blackCherry.flipY = false
  labels.watermelon.flipY = false
  labels.grape.flipY = false
  labels.lemonLime.flipY = false

  const label = labels[flavor as keyof typeof flavorTextures]

  // Atualiza o material da label com a textura correta
  labelMaterial.map = label
  labelMaterial.needsUpdate = true

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.12) * 0.06
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.01
    }
  })

  return (
    <group ref={groupRef} scale={scale} rotation={[0, -Math.PI, 0]}>
      {/* Corpo da lata (metal) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as Mesh).geometry}
        material={metalMaterial}
      />
      {/* Label da lata (textura) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as Mesh).geometry}
        material={labelMaterial}
      />
      {/* Aba da lata (metal) */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  )
}

useGLTF.preload('/Soda-can.gltf')