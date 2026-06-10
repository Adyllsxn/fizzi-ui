'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Fizzi</h3>
            <p className="text-white/60 text-sm">
              Experiência 3D interativa com latinhas de refrigerante
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#flavors" className="text-white/60 hover:text-white transition-colors">
                  Sabores
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/60 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/60 hover:text-white transition-colors">
                  Comprar
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-3">Redes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/Adyllsxn/fizzi-ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://fizzi-ui.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Vercel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-sm">
          <p>&copy; {currentYear} Fizzi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}