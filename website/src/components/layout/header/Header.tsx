'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlHeader = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Início" },
    { href: "#stats", label: "Benefícios" },
    { href: "#sabores", label: "Sabores" },
    { href: "#cta", label: "Comprar" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      
      {/* Desktop Header */}
      <div className="hidden md:block mx-6 mt-4">
        <div className={`rounded-2xl border transition-all duration-300 px-8 py-4 ${
          scrolled 
            ? 'bg-white border-gray-200 shadow-lg' 
            : 'bg-white/5 backdrop-blur-xl border-white/10'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo + Links lado a lado */}
            <div className="flex items-center gap-12">
              <Link href="/" className="transition-transform hover:scale-105 duration-300">
                <Image 
                  src="/logo/icon.svg" 
                  alt="Fizzi" 
                  width={44} 
                  height={44}
                  className={`w-11 h-11 transition-all duration-300 ${
                    scrolled ? 'brightness-0' : 'brightness-0 invert'
                  }`}
                />
              </Link>

              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors text-base font-medium uppercase tracking-wide ${
                      scrolled 
                        ? 'text-gray-600 hover:text-orange-500' 
                        : 'text-white/70 hover:text-orange-500'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden mx-4 mt-4">
        <div className={`rounded-2xl border transition-all duration-300 px-5 py-3 ${
          scrolled 
            ? 'bg-white border-gray-200 shadow-lg' 
            : 'bg-white/5 backdrop-blur-xl border-white/10'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="transition-transform hover:scale-105 duration-300">
              <Image 
                src="/logo/icon.svg" 
                alt="Fizzi" 
                width={36} 
                height={36}
                className={`w-9 h-9 transition-all duration-300 ${
                  scrolled ? 'brightness-0' : 'brightness-0 invert'
                }`}
              />
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'text-gray-600 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <nav className="flex flex-col gap-2 pb-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors px-4 py-2 rounded-lg text-sm ${
                    scrolled 
                      ? 'text-gray-600 hover:text-orange-500 hover:bg-gray-100' 
                      : 'text-white/70 hover:text-orange-500 hover:bg-white/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}