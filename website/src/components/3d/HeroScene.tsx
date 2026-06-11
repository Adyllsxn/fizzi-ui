'use client'

// @ts-nocheck
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { SodaCan } from './SodaCan'
import { Group } from 'three'

function AnimatedCan() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.08
      groupRef.current.position.x = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <SodaCan flavor="strawberryLemonade" scale={2.5} />
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
            environmentIntensity={0.6}
            background={false}
          />
          
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 3, 2]} intensity={1.2} color="#ffffff" />
          <pointLight position={[0, 2, 3]} intensity={0.8} color="#ffffff" />
          <pointLight position={[1, 0.5, 2]} intensity={0.5} color="#ffaa66" />
          
          <AnimatedCan />
        </Suspense>
      </Canvas>
    </div>
  )
}