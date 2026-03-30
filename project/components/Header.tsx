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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled ? 'border-[#E8E8E8] shadow-[0_8px_24px_rgba(0,0,0,0.08)]' : 'border-[#E8E8E8]'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-black tracking-wide">
          <span className="text-[#E8232A]">JR</span> <span className="text-[#1A1A2E]">AUTOMOTORES</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[#1A1A2E] transition-colors hover:text-[#E8232A]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5493548503428"
            className="hidden rounded-full bg-[#E8232A] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#cf1c25] md:inline-flex"
          >
            Consultar
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E8E8] text-[#1A1A2E] md:hidden"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#E8E8E8] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-semibold text-[#1A1A2E]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://wa.me/5493548503428" className="rounded-full bg-[#E8232A] px-4 py-2 text-center text-white">
              Consultar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
