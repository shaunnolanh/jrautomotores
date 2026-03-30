'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = ['/slide_hero_1.jpg', '/slide_hero_2.jpg', '/slide_hero_3.jpg'];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();

  const autoOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const autoScale = useTransform(scrollY, [0, 320], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 320], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 320], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-gris-borde/70 pt-14">
      <div className="pointer-events-none absolute inset-x-0 top-16 select-none text-center text-[28vw] font-black uppercase leading-none text-[#141414] lg:text-[16vw]">
        JR
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 lg:grid-cols-2 lg:pb-24">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-7">
          <h1 className="text-4xl font-black uppercase leading-[0.95] md:text-6xl lg:text-7xl">
            <span className="block text-white">Encontrá tu</span>
            <span className="block text-rojo">Auto ideal</span>
          </h1>
          <p className="max-w-xl text-base text-gris-texto md:text-lg">
            Selección premium de autos nuevos y usados en La Falda, Córdoba.
          </p>
          <Link
            href="/vehiculos"
            className="inline-flex items-center rounded-full bg-rojo px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-rojo-hover"
          >
            Ver vehículos
          </Link>
        </motion.div>

        <motion.div style={{ opacity: autoOpacity, scale: autoScale }} className="relative">
          <div className="relative h-[240px] overflow-hidden rounded-3xl border border-gris-borde bg-[#0f0f0f] p-4 shadow-rojo sm:h-[320px] lg:h-[380px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current]}
                src={slides[current]}
                alt="Vehículo destacado"
                className="h-full w-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index ? 'w-7 bg-rojo' : 'w-2.5 bg-white/40'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
