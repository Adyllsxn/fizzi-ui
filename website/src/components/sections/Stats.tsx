'use client';

import { HiOutlineUsers, HiOutlineSparkles, HiOutlineBeaker } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: HiOutlineUsers,
      value: "2.000+",
      label: "Clientes satisfeitos"
    },
    {
      icon: HiOutlineSparkles,
      value: "5",
      label: "Sabores únicos"
    },
    {
      icon: HiOutlineBeaker,
      value: "0%",
      label: "Açúcar e adoçantes"
    }
  ];

  return (
    <section id="stats" className="relative py-24 bg-black overflow-hidden">
      
      {/* Ondas */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -mt-px">
        <svg className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1a1a1a" opacity="0.9"/>
          <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z" fill="#1a1a1a" opacity="0.5"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Lado Esquerdo - Texto igual ao CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-orange-500/50" />
              <span className="text-xs uppercase tracking-wider text-orange-500 font-semibold">
                Prova social
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white font-light">Números que</span>
              <br />
              <span className="text-orange-500 font-black">comprovam</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Pessoas reais já experimentaram e aprovaram o Fizzi.
            </p>
          </motion.div>

          {/* Lado Direito - Cards */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white/5 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden border border-white/5 hover:border-orange-500/50"
                >
                  <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Icon className="text-9xl text-white" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-300 text-sm uppercase tracking-wider">
                      {stat.label}
                    </p>
                    <div className="w-12 h-0.5 bg-gray-600 mt-4 group-hover:w-20 group-hover:bg-orange-500 transition-all duration-500"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Ondas bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180">
        <svg className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#1a1a1a" opacity="0.9"/>
          <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,11.6,136.47,7.22,206.42-5.49C369.5,7.31,472.33,9.69,581.09,18.39c101.36,8.15,204.65,20.16,307.66,16.2C982.52,31.48,1107.22,13.84,1200,1.89V0Z" fill="#1a1a1a" opacity="0.5"/>
        </svg>
      </div>
    </section>
  );
}