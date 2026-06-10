'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HeroScene } from '@/components/3d/HeroScene'
import heroData from '@/lib/data/hero.json'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      tl.set(".hero", { opacity: 1 })
      tl.fromTo(".hero-header-word span", 
        { scale: 3, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power4.out", delay: 0.3 }
      )
      .fromTo(".hero-subheading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
    })

    return () => ctx.revert()
  }, [])

  const headingWords = heroData.heading.split(' ')

  return (
    <section ref={heroRef} className="hero opacity-0 relative min-h-screen overflow-hidden">
      
      {/* Fundo preto */}
      <div className="absolute inset-0 bg-[#0a0a0a] z-0" />

      {/* Onda inferior - estática com suppressHydrationWarning */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 -mb-px rotate-180 z-10">
        <svg
          suppressHydrationWarning
          className="relative block w-full h-10 sm:h-14 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#1a1a1a"
            opacity="0.9"
          />
          <path
            d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z"
            fill="#1a1a1a"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Conteúdo textual */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center">
        <div className="text-center px-4">
          <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-orange-500 md:text-[9rem] lg:text-[13rem]">
            {headingWords.map((word, wordIdx) => (
              <div key={wordIdx} className="hero-header-word overflow-hidden">
                <div className="flex justify-center">
                  {word.split('').map((letter, letterIdx) => (
                    <span key={letterIdx} className="inline-block">
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </h1>
          
          <div className="hero-subheading mt-8 text-3xl font-semibold text-white/80 md:text-5xl lg:text-6xl">
            <p>{heroData.subheading}</p>
          </div>
        </div>
      </div>

      {/* Cena 3D */}
      <div className="hero-scene sticky top-0 z-30 -mt-[100vh] h-screen w-screen pointer-events-none">
        <HeroScene />
      </div>
    </section>
  )
}