'use client'

// @ts-nocheck
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import { Group, Mesh, MeshStandardMaterial } from 'three'

interface SodaCanProps {
  flavor?: string
}

const flavorImages: Record<string, string> = {
  cherry: '/labels/cherry.png',
  grape: '/labels/grape.png',
  'lemon-lime': '/labels/lemon-lime.png',
  strawberry: '/labels/strawberry.png',
  watermelon: '/labels/watermelon.png'
}

export function SodaCan({ flavor = 'strawberry' }: SodaCanProps) {
  const groupRef = useRef<Group>(null)
  const { scene, materials } = useGLTF('/Soda-can.gltf')
  const labelTexture = useTexture(flavorImages[flavor] || flavorImages.strawberry)
  
  useEffect(() => {
    if (labelTexture) {
      labelTexture.flipY = false
      labelTexture.needsUpdate = true
    }
  }, [labelTexture])

  useEffect(() => {
    if (!labelTexture) return
    
    Object.values(materials).forEach((material) => {
      const mat = material as MeshStandardMaterial
      mat.map = labelTexture
      mat.metalness = 0.2
      mat.roughness = 0.4
      mat.color.setHex(0xffffff)
      mat.needsUpdate = true
    })
    
  }, [materials, labelTexture, flavor])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.12) * 0.06
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.01
    }
  })

  return (
    <group ref={groupRef} scale={2.2}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload('/Soda-can.gltf')