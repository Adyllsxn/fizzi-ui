'use client'

// @ts-nocheck
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Suspense } from 'react'
import { SodaCan } from './SodaCan'

export function HeroScene() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 40 }}
        className="h-full w-full"
        style={{ background: '#1a1a1a' }}
      >
        <Suspense fallback={null}>
          <Environment 
            files="/hdr/lobby.hdr" 
            environmentIntensity={0.3}
            background={false}
          />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 2]} intensity={1.2} color="#ffffff" />
          <pointLight position={[0, 2, 3]} intensity={0.8} color="#ffffff" />
          <pointLight position={[1, 0.5, 2]} intensity={0.5} color="#ffaa66" />
          
          <SodaCan flavor="strawberryLemonade" scale={2} />
          
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1.2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}