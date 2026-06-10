'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { View } from '@react-three/drei';
import clsx from 'clsx';
import FloatingCan from '@/components/3d/FloatingCan';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    heading: "Amigo do Intestino",
    body: "Nossa soda é rica em prebióticos e 1 bilhão de probióticos, dando ao seu intestino o cuidado que ele merece. Diga adeus ao inchaço e olá a um sistema digestivo saudável e feliz a cada gole.",
    flavor: "strawberryLemonade"
  },
  {
    heading: "Poucas Calorias, Muito Sabor",
    body: "Desfrute de um sabor ousado e refrescante sem culpa. Com apenas 20 calorias por lata, você pode aproveitar todo o sabor que deseja sem compromisso.",
    flavor: "grape"
  },
  {
    heading: "Naturalmente Refrescante",
    body: "Feita apenas com os melhores ingredientes naturais, nossa soda é livre de adoçantes e sabores artificiais. É um sabor puro e limpo que é tão bom quanto parece.",
    flavor: "blackCherry"
  }
];

export function AlternatingText() {
  const containerRef = useRef<HTMLElement>(null);
  const canRef = useRef<any>(null);

  useEffect(() => {
    if (!canRef.current) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".alternating-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          pin: true,
        },
      });

      sections.forEach((_, index) => {
        if (index === 0) return;
        
        const isOdd = index % 2 !== 0;
        const xPosition = isOdd ? -1 : 1;
        
        scrollTl
          .to(canRef.current.position, {
            x: xPosition,
            duration: 1,
            ease: "power2.inOut",
          });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="alternating-container relative bg-[#0a0a0a] overflow-hidden"
    >
      {/* Cena 3D */}
      <View className="alternating-scene absolute left-0 top-0 h-screen w-full">
        <group ref={canRef} position-x={1} rotation-y={-0.3}>
          <FloatingCan flavor="strawberryLemonade" floatSpeed={1.5} />
        </group>
      </View>

      {/* Conteúdo textual */}
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div
            key={index}
            className="alternating-section grid h-screen place-items-center gap-x-12 px-4 md:grid-cols-2"
          >
            <div
              className={clsx(
                index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                "rounded-2xl bg-black/40 p-8 backdrop-blur-md border border-white/10"
              )}
            >
              <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg text-gray-300 md:text-xl">
                {section.body}
              </p>
            </div>
          </div>
        ))}
      </div>

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