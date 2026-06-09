'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles } from '@react-three/drei';
import { useState } from 'react';

const flavors = [
  { name: 'Black Cherry', value: 'blackCherry', color: '#710523' },
  { name: 'Grape', value: 'grape', color: '#572981' },
  { name: 'Lemon Lime', value: 'lemonLime', color: '#164405' },
  { name: 'Strawberry', value: 'strawberryLemonade', color: '#690B3D' },
  { name: 'Watermelon', value: 'watermelon', color: '#4B7002' },
];

// Componente SodaCan simplificado (sem o GLTF)
function SimpleSodaCan({ color, scale = 1.5 }: { color: string; scale?: number }) {
  return (
    <mesh scale={[scale, scale * 1.5, scale]}>
      <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </mesh>
  );
}

export default function Home() {
  const [currentFlavor, setCurrentFlavor] = useState('blackCherry');
  const [autoRotate, setAutoRotate] = useState(true);

  const currentColor = flavors.find(f => f.value === currentFlavor)?.color || '#710523';

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fundo gradiente */}
      <div 
        className="absolute inset-0 transition-colors duration-500"
        style={{ 
          background: `linear-gradient(135deg, ${currentColor}, #1a1a2e)` 
        }}
      />
      
      {/* Canvas 3D */}
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }} className="relative z-10">
        <ambientLight intensity={0.4} />
        <spotLight position={[5, 5, 5]} intensity={1.5} penumbra={0.5} />
        <pointLight position={[-3, 2, 4]} intensity={0.8} />
        <directionalLight position={[0, 5, 0]} intensity={0.5} />
        
        <Environment files="/hdr/lobby.hdr" environmentIntensity={1.2} />
        <Sparkles count={200} scale={8} size={0.4} speed={0.3} color="#ffffff" />
        
        <SimpleSodaCan color={currentColor} scale={1.2} />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
        />
      </Canvas>
      
      {/* UI */}
      <div className="absolute bottom-8 left-0 right-0 z-20 mx-auto max-w-md rounded-2xl bg-black/50 p-4 backdrop-blur-md">
        <div className="flex flex-wrap justify-center gap-2">
          {flavors.map((flavor) => (
            <button
              key={flavor.value}
              onClick={() => setCurrentFlavor(flavor.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all
                ${currentFlavor === flavor.value 
                  ? 'scale-105 bg-white text-black shadow-lg' 
                  : 'bg-white/20 text-white hover:bg-white/30'
                }`}
            >
              {flavor.name}
            </button>
          ))}
        </div>
        <div className="mt-3 flex justify-center">
          <button 
            onClick={() => setAutoRotate(!autoRotate)}
            className="rounded-lg bg-white/20 px-4 py-1 text-xs text-white"
          >
            {autoRotate ? '⏸️ Pause' : '▶️ Rotate'}
          </button>
        </div>
      </div>
      
      {/* Título */}
      <div className="absolute left-0 right-0 top-20 text-center z-20">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
          Fizzi
        </h1>
        <p className="text-white/80 text-lg mt-2">
          {flavors.find(f => f.value === currentFlavor)?.name}
        </p>
      </div>
    </div>
  );
}