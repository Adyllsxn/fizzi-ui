'use client'

// @ts-nocheck
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { SodaCan } from './SodaCan'
import { Group } from 'three'

function RotatingCan() {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={groupRef}>
      <SodaCan flavor="strawberryLemonade" scale={3} />
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 45 }}
        className="h-full w-full"
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Environment 
            files="/hdr/lobby.hdr" 
            environmentIntensity={0.5}
            background={false}
          />
          
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 2]} intensity={1.0} color="#ffffff" />
          <pointLight position={[0, 2, 3]} intensity={0.6} color="#ffffff" />
          
          <RotatingCan />
        </Suspense>
      </Canvas>
    </div>
  )
}