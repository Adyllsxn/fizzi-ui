'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import { SodaCan } from '@/components/3d/SodaCan';
import clsx from 'clsx';
import { useRef, useEffect } from 'react';

const sections = [
  {
    heading: "Amigo do Intestino",
    body: "Nossa soda é rica em prebióticos e 1 bilhão de probióticos, dando ao seu intestino o cuidado que ele merece. Diga adeus ao inchaço e olá a um sistema digestivo saudável e feliz a cada gole.",
    flavor: "lemonLime",
    label: "lemon-lime.png",
    icon: "🍋",
    color: "from-emerald-500/20 to-emerald-600/10",
    floatSpeed: 1.2,
    rotationIntensity: 0.8,
    floatIntensity: 0.6
  },
  {
    heading: "Poucas Calorias, Muito Sabor",
    body: "Desfrute de um sabor ousado e refrescante sem culpa. Com apenas 20 calorias por lata, você pode aproveitar todo o sabor que deseja sem compromisso.",
    flavor: "grape",
    label: "grape.png",
    icon: "🍇",
    color: "from-purple-500/20 to-purple-600/10",
    floatSpeed: 1.8,
    rotationIntensity: 1.2,
    floatIntensity: 0.9
  },
  {
    heading: "Naturalmente Refrescante",
    body: "Feita apenas com os melhores ingredientes naturais, nossa soda é livre de adoçantes e sabores artificiais. É um sabor puro e limpo que é tão bom quanto parece.",
    flavor: "watermelon",
    label: "watermelon.png",
    icon: "🍉",
    color: "from-red-500/20 to-red-600/10",
    floatSpeed: 1.5,
    rotationIntensity: 1.0,
    floatIntensity: 0.7
  }
];

function CanScene({ flavor, label, floatSpeed, rotationIntensity, floatIntensity }: { 
  flavor: string; 
  label: string; 
  floatSpeed: number; 
  rotationIntensity: number;
  floatIntensity: number;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} className="h-full w-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 2]} intensity={1.5} color="#ffffff" />
      <pointLight position={[0, 2, 3]} intensity={1.0} color="#ffffff" />
      <pointLight position={[1, 1, 2]} intensity={0.5} color="#ffaa66" />
      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.0} />
      
      <Float 
        speed={floatSpeed} 
        rotationIntensity={rotationIntensity} 
        floatIntensity={floatIntensity}
      >
        <SodaCan flavor={flavor} scale={2.5} />
      </Float>
    </Canvas>
  );
}

export function AlternatingText() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observerRef.current?.observe(card);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="alternating-container relative bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] py-24 overflow-hidden">
      
      {/* Título */}
      <div className="max-w-6xl mx-auto px-4 mb-16 text-right">
        <div className="flex items-center justify-end gap-3 mb-4">
          <span className="text-orange-500 text-sm uppercase tracking-wider font-semibold">Sabores</span>
          <div className="w-12 h-0.5 bg-orange-500/50" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Experimente nossos <span className="text-orange-500">sabores</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl ml-auto">
          Cada um com sua personalidade e benefícios únicos
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={clsx(
                "group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2",
                "bg-gradient-to-br border border-white/10 hover:border-orange-500/50",
                section.color
              )}
            >
              {/* Lata 3D */}
              <div className="h-80 w-full relative overflow-hidden bg-black/30">
                <div className="absolute inset-0 pointer-events-none">
                  <CanScene 
                    flavor={section.flavor}
                    label={section.label}
                    floatSpeed={section.floatSpeed}
                    rotationIntensity={section.rotationIntensity}
                    floatIntensity={section.floatIntensity}
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-xl font-bold text-white">
                    {section.heading}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {section.body}
                </p>
                <div className="mt-6 w-12 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ondas */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <svg className="relative block w-full h-10 sm:h-14 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1a1a1a" opacity="0.9"/>
          <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z" fill="#1a1a1a" opacity="0.5"/>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 -mb-px rotate-180">
        <svg className="relative block w-full h-10 sm:h-14 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1a1a1a" opacity="0.9"/>
          <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z" fill="#1a1a1a" opacity="0.5"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
}