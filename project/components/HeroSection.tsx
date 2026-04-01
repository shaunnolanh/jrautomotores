'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = ['/slide_hero_1.jpg', '/slide_hero_2.jpg', '/slide_hero_3.jpg'];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 380], [0, -45]);
  const carY = useTransform(scrollY, [0, 380], [0, -70]);
  const sectionOpacity = useTransform(scrollY, [0, 420], [1, 0.25]);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section style={{ opacity: sectionOpacity }} className="relative overflow-hidden bg-fondo-base pt-10 md:pt-14">
      <span className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 select-none text-[18vw] font-black leading-none text-[#f0f0f3] lg:block">
        AUTO
      </span>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-24 lg:grid-cols-2 lg:items-center">
        <motion.div style={{ y: textY }} className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-texto-secundario">JR Automotores · La Falda</p>
          <h1 className="text-4xl font-black leading-[0.95] text-texto-principal md:text-6xl">
            Encontrá tu próximo
            <span className="block text-rojo">auto ideal</span>
          </h1>
          <p className="max-w-xl text-base text-texto-secundario md:text-lg">
            Vehículos nuevos y usados seleccionados, con asesoramiento transparente y financiación a tu medida.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/vehiculos"
              className="inline-flex items-center rounded-full bg-texto-principal px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#111122]"
            >
              Ver vehículos
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-full border border-neutral-300 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-texto-principal transition-colors hover:border-rojo hover:text-rojo"
            >
              Agendar visita
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ y: carY }} className="relative">
          <div className="relative h-[240px] overflow-hidden rounded-[28px] bg-white p-3 shadow-card sm:h-[320px] lg:h-[390px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current]}
                src={slides[current]}
                alt="Vehículo destacado"
                className="h-full w-full object-contain"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </AnimatePresence>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${current === index ? 'w-8 bg-rojo' : 'w-2.5 bg-neutral-300'}`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
