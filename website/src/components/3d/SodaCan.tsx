// src/components/3d/SodaCan.tsx
'use client'

import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import { Group, Mesh, MeshStandardMaterial, Color } from 'three'

interface SodaCanProps {
  position?: [number, number, number]
  flavor?: string
}

export function SodaCan({ position = [0, 0, 0], flavor = 'strawberry' }: SodaCanProps) {
  const groupRef = useRef<Group>(null)
  const [modelLoaded, setModelLoaded] = useState(false)
  
  // Carrega o modelo 3D da lata
  const { scene } = useGLTF('/Soda-can.gltf')
  
  // Carrega a textura da label
  const flavorImages: Record<string, string> = {
    cherry: '/labels/cherry.png',
    grape: '/labels/grape.png',
    'lemon-lime': '/labels/lemon-lime.png',
    strawberry: '/labels/strawberry.png',
    watermelon: '/labels/watermelon.png'
  }
  
  const labelTexture = useTexture(flavorImages[flavor] || flavorImages.strawberry)
  
  useEffect(() => {
    if (scene && labelTexture) {
      // Aplica a textura e aumenta o brilho dos materiais
      scene.traverse((child) => {
        const mesh = child as Mesh
        if (mesh.isMesh) {
          // Assume que o corpo da lata tem o nome 'cylinder' ou 'can'
          if (mesh.name === 'cylinder' || mesh.name === 'can') {
            if (mesh.material) {
              const material = mesh.material as MeshStandardMaterial
              material.map = labelTexture
              material.metalness = 0.3 // Menos metalizado
              material.roughness = 0.4
              material.emissiveIntensity = 0.2 // Brilho próprio
              material.emissive = new Color('#ffffff')
              material.needsUpdate = true
            }
          }
          // Ajusta o material do lacre (Tab)
          if (mesh.name === 'Tab') {
            const material = mesh.material as MeshStandardMaterial
            material.metalness = 0.7
            material.roughness = 0.3
            material.color.setHex(0xE0E0E0)
            material.emissiveIntensity = 0.1
          }
          
          // Aumenta a visibilidade de todas as partes
          if (mesh.material) {
            const material = mesh.material as MeshStandardMaterial
            material.roughness = 0.3
            material.metalness = 0.4
          }
        }
      })
      setModelLoaded(true)
    }
  }, [scene, labelTexture, flavor])

  useFrame((state) => {
    if (groupRef.current) {
      // Rotação suave
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.15) * 0.03
      
      // Pequeno floating effect
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1) * 0.02
    }
  })

  if (!modelLoaded) return null

  return (
    <group ref={groupRef} position={position} scale={2}>
      <primitive object={scene} />
    </group>
  )
}

// Pré-carrega o modelo para performance
useGLTF.preload('/Soda-can.gltf')