'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const autoOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const autoScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const textY = useTransform(scrollY, [0, 300], [0, -40]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative overflow-hidden border-b border-gris-borde pb-16 pt-12">
      <div className="pointer-events-none absolute inset-0 text-center text-[20vw] font-black leading-none text-gris-oscuro/60">JR</div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
        <motion.div style={{ y: textY, opacity: textOpacity }} className="space-y-4">
          <h1 className="text-5xl font-black leading-tight">Encontrá tu <span className="text-rojo">AUTO IDEAL</span></h1>
          <p className="text-gris-texto">Empresa familiar dedicada a la compra y venta de automotores nuevos y usados.</p>
          <a href="/vehiculos" className="inline-block rounded-lg bg-rojo px-6 py-3 font-bold">Ver vehículos</a>
        </motion.div>
        <motion.div style={{ opacity: autoOpacity, scale: autoScale }}>
          <img src="/brand/hero-car.svg" alt="Auto destacado" className="h-[320px] w-full object-contain" />
        </motion.div>
      </div>
      <div className="mx-auto mt-8 max-w-4xl rounded-full bg-white p-2 text-black">
        <div className="grid grid-cols-4 gap-2 text-sm"><input className="rounded-full px-3 py-2" placeholder="Nuevo / Usado" /><input className="rounded-full px-3 py-2" placeholder="Marca" /><input className="rounded-full px-3 py-2" placeholder="Modelo" /><button className="rounded-full bg-rojo px-4 py-2 text-white">Buscar</button></div>
      </div>
    </section>
  );
}
