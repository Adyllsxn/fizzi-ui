'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      
      {/* Onda superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <div className="animate-wave-up">
          <svg
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
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 -mb-px rotate-180">
        <div className="animate-wave-down">
          <svg
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
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid principal - 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Lado esquerdo - Marca com tipografia Alpino */}
          <div>
            <div className="mt-8">
              <h2 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white/10 select-none tracking-tighter font-alpino">
                F I Z Z I
              </h2>
              <p className="text-gray-500 text-sm mt-4 max-w-md font-inter">
                Soda perfeita. Saborosa. Feita para quem vive intensamente.
              </p>
            </div>
          </div>

          {/* Lado direito - Links */}
          <div>
            <div className="grid grid-cols-2 gap-8">
              
              {/* Sabores */}
              <div>
                <h3 className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 font-inter">Sabores</h3>
                <ul className="space-y-2">
                  {["Cherry", "Grape", "Lemon Lime", "Strawberry", "Watermelon"].map((flavor) => (
                    <li key={flavor}>
                      <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-inter">
                        {flavor}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navegação */}
              <div>
                <h3 className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4 font-inter">Navegação</h3>
                <ul className="space-y-2">
                  {["Home", "Sabores", "Sobre"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block text-sm font-inter">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* Copyright e badges */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-inter">
            © 2026 Fizzi. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link 
              href="https://github.com/Adyllsxn/fizzi-ui" 
              target="_blank"
              className="text-gray-500 hover:text-orange-500 hover:scale-105 transition-all duration-300 text-xs inline-block font-inter"
            >
              GitHub
            </Link>
            <Link 
              href="https://fizzi-ui.vercel.app" 
              target="_blank"
              className="text-gray-500 hover:text-orange-500 hover:scale-105 transition-all duration-300 text-xs inline-block font-inter"
            >
              Vercel
            </Link>
            <span className="text-gray-600 text-xs font-inter">MIT License</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes waveUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes waveDownUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        
        .animate-wave-up {
          animation: waveUpDown 5s ease-in-out infinite;
        }
        
        .animate-wave-down {
          animation: waveDownUp 5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}