'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/vehiculos', label: 'Vehículos' },
  { href: '/cotizador', label: 'Cotizador' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-gris-borde/70 bg-negro/75 backdrop-blur-xl'
          : 'border-transparent bg-negro/95'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-black tracking-wide">
          <span className="text-rojo">JR</span> <span className="text-white">AUTOMOTORES</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-gris-texto md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href="https://wa.me/5493548503428"
          className="rounded-full bg-rojo px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-rojo-hover"
        >
          Consultar
        </a>
      </nav>
    </header>
  );
}
