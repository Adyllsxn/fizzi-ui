// src/app/_components/Hero.tsx
'use client'

import { useState } from 'react'
import { HeroScene } from '@/components/3d/HeroScene'

export function Hero() {
  const [currentFlavor, setCurrentFlavor] = useState('strawberry')

  const flavors = [
    { id: 'cherry', name: 'CHERRY' },
    { id: 'grape', name: 'GRAPE' },
    { id: 'lemon-lime', name: 'LEMON LIME' },
    { id: 'strawberry', name: 'STRAWBERRY' },
    { id: 'watermelon', name: 'WATERMELON' }
  ]

  return (
    <section className="relative min-h-screen bg-white">
      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 px-4 py-20 md:flex-row">
        
        {/* Lado esquerdo - Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-8 text-7xl font-black uppercase tracking-tighter text-black md:text-8xl lg:text-9xl">
            LIVE<br />
            <span className="text-red-600">GUTSY</span>
          </h1>
          
          <p className="mb-4 text-2xl font-bold uppercase tracking-wide text-gray-600 md:text-3xl">
            SODA PERFECTED
          </p>
          
          <p className="mb-10 text-lg text-gray-500">
            3-5g sugar • 9g fiber • 5 flavors
          </p>
          
          {/* Seletor de sabores */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 md:justify-start">
            {flavors.map((flavor) => (
              <button
                key={flavor.id}
                onClick={() => setCurrentFlavor(flavor.id)}
                className={`border-2 px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  currentFlavor === flavor.id
                    ? 'border-red-600 bg-red-600 text-white'
                    : 'border-gray-300 bg-transparent text-gray-500 hover:border-gray-500 hover:text-gray-700'
                }`}
              >
                {flavor.name}
              </button>
            ))}
          </div>
          
          {/* Botão */}
          <button className="group relative overflow-hidden border-2 border-red-600 bg-transparent px-10 py-4 text-xl font-bold uppercase tracking-wider text-red-600 transition-all hover:bg-red-600 hover:text-white">
            <span className="relative z-10">SHOP NOW</span>
          </button>
        </div>
        
        {/* Lado direito - Lata 3D */}
        <div className="flex-1">
          <HeroScene flavor={currentFlavor} />
        </div>
      </div>
      
      {/* Scroll indicator minimalista */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
        <div className="h-10 w-6 rounded-full border-2 border-gray-300">
          <div className="mx-auto mt-2 h-2 w-2 animate-pulse rounded-full bg-gray-400" />
        </div>
      </div>
    </section>
  )
}