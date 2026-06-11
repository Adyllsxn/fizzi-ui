'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HeroScene } from '@/components/3d/HeroScene'
import { HiOutlineArrowRight } from 'react-icons/hi2'

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const titleLetters = "Soda Perfeita".split('')
  const descriptionWords = "Feita com ingredientes reais e um toque de açúcar de cana. Sem adoçantes artificiais. Refrescante e deliciosa.".split(' ')

  const letterAnimation = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: { y: 0, opacity: 1, rotateX: 0 }
  }

  const wordAnimation = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Fundo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] z-0" />

      {/* Bolhas CSS animadas - VERSÃO SIMPLIFICADA QUE FUNCIONA */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        <div className="bubble bubble-13"></div>
        <div className="bubble bubble-14"></div>
        <div className="bubble bubble-15"></div>
        <div className="bubble bubble-16"></div>
        <div className="bubble bubble-17"></div>
        <div className="bubble bubble-18"></div>
        <div className="bubble bubble-19"></div>
        <div className="bubble bubble-20"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-20">
          
          {/* Lado Esquerdo - Texto */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <div className="flex flex-wrap">
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterAnimation}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.02, duration: 0.5, ease: "backOut" }}
                    className="inline-block"
                    style={{ 
                      display: 'inline-block',
                      whiteSpace: 'pre',
                      color: letter === ' ' ? 'transparent' : (letter === 'S' || letter === 'P' ? '#F97316' : 'white'),
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 font-light mb-10 leading-relaxed max-w-md">
              {descriptionWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordAnimation}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            
            {/* Botoes */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 overflow-hidden transition-all duration-300 hover:scale-105 font-semibold rounded-full cursor-pointer"
                style={{ 
                  background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
                  color: "white"
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Comprar Agora
                  <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 opacity-20 rounded-full"></span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-transparent text-white overflow-hidden transition-all duration-300 hover:bg-white/10 border-2 border-white/20 text-base font-medium rounded-full cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Sabores
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Lado Direito - Lata 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full z-0" />
            <div className="relative z-10">
              <HeroScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Onda inferior */}
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

      <style jsx>{`
  .bubble {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    pointer-events: none;
    animation: rise 8s infinite ease-in-out;
  }
  
  @keyframes rise {
    0% {
      transform: translateY(100vh) scale(0.3);
      opacity: 0;
    }
    10% {
      opacity: 0.4;
    }
    30% {
      opacity: 0.6;
    }
    70% {
      opacity: 0.4;
    }
    100% {
      transform: translateY(-10vh) scale(1);
      opacity: 0;
    }
  }
  
  /* Posições e tamanhos individuais - mais lentos */
  .bubble-1 { width: 6px; height: 6px; left: 10%; animation-duration: 8s; animation-delay: 0s; }
  .bubble-2 { width: 10px; height: 10px; left: 25%; animation-duration: 10s; animation-delay: 1s; }
  .bubble-3 { width: 5px; height: 5px; left: 40%; animation-duration: 7s; animation-delay: 2s; }
  .bubble-4 { width: 12px; height: 12px; left: 55%; animation-duration: 12s; animation-delay: 0.5s; }
  .bubble-5 { width: 8px; height: 8px; left: 70%; animation-duration: 9s; animation-delay: 3s; }
  .bubble-6 { width: 6px; height: 6px; left: 85%; animation-duration: 11s; animation-delay: 1.5s; }
  .bubble-7 { width: 11px; height: 11px; left: 15%; animation-duration: 7.5s; animation-delay: 4s; }
  .bubble-8 { width: 7px; height: 7px; left: 35%; animation-duration: 9.5s; animation-delay: 0.8s; }
  .bubble-9 { width: 9px; height: 9px; left: 50%; animation-duration: 8.5s; animation-delay: 2.5s; }
  .bubble-10 { width: 10px; height: 10px; left: 65%; animation-duration: 10.5s; animation-delay: 1.2s; }
  .bubble-11 { width: 4px; height: 4px; left: 80%; animation-duration: 13s; animation-delay: 3.5s; }
  .bubble-12 { width: 13px; height: 13px; left: 5%; animation-duration: 8.2s; animation-delay: 0.3s; }
  .bubble-13 { width: 7px; height: 7px; left: 20%; animation-duration: 9.8s; animation-delay: 2.2s; }
  .bubble-14 { width: 10px; height: 10px; left: 45%; animation-duration: 7.8s; animation-delay: 1.8s; }
  .bubble-15 { width: 6px; height: 6px; left: 60%; animation-duration: 11.5s; animation-delay: 4.5s; }
  .bubble-16 { width: 8px; height: 8px; left: 75%; animation-duration: 8.8s; animation-delay: 0.6s; }
  .bubble-17 { width: 11px; height: 11px; left: 90%; animation-duration: 9.2s; animation-delay: 2.8s; }
  .bubble-18 { width: 5px; height: 5px; left: 30%; animation-duration: 12.5s; animation-delay: 1.1s; }
  .bubble-19 { width: 9px; height: 9px; left: 95%; animation-duration: 7.2s; animation-delay: 3.8s; }
  .bubble-20 { width: 7px; height: 7px; left: 8%; animation-duration: 10.8s; animation-delay: 0.9s; }
  .bubble-21 { width: 12px; height: 12px; left: 18%; animation-duration: 14s; animation-delay: 5s; }
  .bubble-22 { width: 5px; height: 5px; left: 33%; animation-duration: 9.3s; animation-delay: 2.1s; }
  .bubble-23 { width: 14px; height: 14px; left: 48%; animation-duration: 11.2s; animation-delay: 0.4s; }
  .bubble-24 { width: 6px; height: 6px; left: 63%; animation-duration: 8.6s; animation-delay: 3.2s; }
  .bubble-25 { width: 10px; height: 10px; left: 78%; animation-duration: 12.8s; animation-delay: 1.6s; }
  .bubble-26 { width: 8px; height: 8px; left: 93%; animation-duration: 7.6s; animation-delay: 4.2s; }
  .bubble-27 { width: 7px; height: 7px; left: 12%; animation-duration: 10.2s; animation-delay: 0.7s; }
  .bubble-28 { width: 11px; height: 11px; left: 28%; animation-duration: 9.6s; animation-delay: 2.9s; }
  .bubble-29 { width: 5px; height: 5px; left: 42%; animation-duration: 11.8s; animation-delay: 1.3s; }
  .bubble-30 { width: 13px; height: 13px; left: 58%; animation-duration: 8.4s; animation-delay: 3.6s; }
`}</style>
    </section>
  )
}