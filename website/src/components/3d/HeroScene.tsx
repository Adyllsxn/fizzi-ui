// src/components/3d/HeroScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { Suspense } from 'react'
import { SodaCan } from './SodaCan'

interface HeroSceneProps {
  flavor?: string
}

export function HeroScene({ flavor = 'strawberry' }: HeroSceneProps) {
  return (
    <div className="relative h-[600px] w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        className="!absolute inset-0"
        style={{ background: '#FFFFFF' }}
      >
        <Suspense fallback={null}>
          {/* Luz ambiente mais forte */}
          <ambientLight intensity={0.8} />
          
          {/* Key light principal - mais forte */}
          <spotLight
            position={[5, 5, 5]}
            angle={0.5}
            penumbra={0.3}
            intensity={2.5}
            color="#ffffff"
          />
          
          {/* Fill light direito */}
          <pointLight position={[4, 2, 3]} intensity={1.2} color="#ffffff" />
          
          {/* Fill light esquerdo */}
          <pointLight position={[-4, 2, 3]} intensity={1.0} color="#ffffff" />
          
          {/* Luz frontal direta */}
          <pointLight position={[0, 1, 5]} intensity={1.5} color="#ffffff" />
          
          {/* Back light para contorno */}
          <pointLight position={[0, 2, -4]} intensity={0.8} color="#ffffff" />
          
          {/* Luz quente para destacar cores */}
          <pointLight position={[2, 1, 2]} intensity={0.6} color="#ffaa66" />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 3, Math.PI / 3]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 1000 }}
          >
            <SodaCan flavor={flavor} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  )
}