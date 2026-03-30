'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const slides = ['/slide_hero_1.jpg', '/slide_hero_2.jpg', '/slide_hero_3.jpg'];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 320], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const imageScale = useTransform(scrollY, [0, 320], [1, 0.85]);
  const imageOpacity = useTransform(scrollY, [0, 320], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      <p className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 select-none text-center text-[20vw] font-black uppercase leading-none text-[#F0F0F0]">
        AUTOMOTORES
      </p>

      <div className="relative mx-auto grid min-h-[600px] max-w-6xl items-center gap-8 px-4 py-10 lg:grid-cols-[45%_55%]">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8232A]">
            Concesionaria Oficial · La Falda, Córdoba
          </p>
          <h1 className="text-[42px] font-black uppercase leading-[0.95] text-[#1A1A2E] md:text-[56px]">
            Encontrá tu
            <br />
            <span className="text-[#E8232A]">Auto ideal</span>
          </h1>
          <p className="max-w-xl text-base text-[#6B6B6B] md:text-lg">
            Vehículos seleccionados con respaldo, financiación y atención personalizada para que encuentres tu próximo
            auto.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/vehiculos"
              className="rounded-full bg-[#1A1A2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#111226]"
            >
              Ver vehículos
            </Link>
            <Link
              href="/contacto"
              className="rounded-full border border-[#1A1A2E] px-6 py-3 text-sm font-semibold text-[#1A1A2E] transition-colors hover:bg-[#1A1A2E] hover:text-white"
            >
              Contactar
            </Link>
          </div>

          <div className="flex gap-2 pt-2">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? 'w-8 bg-[#E8232A]' : 'w-2.5 bg-[#E8E8E8]'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div style={{ scale: imageScale, opacity: imageOpacity }} className="relative h-[60vh] min-h-[420px] overflow-hidden rounded-2xl lg:h-[100vh] lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current]}
              src={slides[current]}
              alt="Vehículo destacado"
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-[#1A1A2E]"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-[#1A1A2E]"
            aria-label="Siguiente"
          >
            ›
          </button>
        </motion.div>
      </div>
    </section>
  );
}
