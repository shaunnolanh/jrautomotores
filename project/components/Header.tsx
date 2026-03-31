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
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-neutral-200 bg-white/95 transition-shadow duration-300 backdrop-blur ${
        scrolled ? 'shadow-[0_10px_30px_rgba(26,26,46,0.08)]' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-black tracking-wide text-texto-principal">
          <span className="text-rojo">JR</span> AUTOMOTORES
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold text-texto-principal md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-rojo">
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
