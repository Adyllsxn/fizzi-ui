'use client';

export function About() {
  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
      
      {/* Onda superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
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

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-12 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Soda Perfeita
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          Feita com ingredientes reais e um toque de açúcar de cana. 
          Sem adoçantes artificiais. Refrescante e deliciosa.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-3xl font-bold text-orange-500">0%</p>
            <p className="text-sm text-gray-400">Adoçantes artificiais</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-3xl font-bold text-orange-500">5</p>
            <p className="text-sm text-gray-400">Sabores únicos</p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-3xl font-bold text-orange-500">100%</p>
            <p className="text-sm text-gray-400">Sabor natural</p>
          </div>
        </div>
      </div>

      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 -mb-px rotate-180">
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
    </section>
  );
}