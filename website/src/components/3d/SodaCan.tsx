'use client'

// @ts-nocheck
import { useGLTF, useTexture } from '@react-three/drei'
import { useRef } from 'react'
import { Group, Mesh, MeshStandardMaterial } from 'three'

export interface SodaCanProps {
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

  labels.strawberryLemonade.flipY = false
  labels.blackCherry.flipY = false
  labels.watermelon.flipY = false
  labels.grape.flipY = false
  labels.lemonLime.flipY = false

  const label = labels[flavor as keyof typeof flavorTextures]
  labelMaterial.map = label
  labelMaterial.needsUpdate = true

  return (
    <group ref={groupRef} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as Mesh).geometry}
        material={labelMaterial}
      />
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