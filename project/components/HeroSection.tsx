'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMetadata = () => {
      if (Number.isFinite(video.duration)) {
        setVideoDuration(video.duration);
        video.currentTime = 0;
      }
    };

    video.pause();
    video.addEventListener('loadedmetadata', handleMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, []);

  useEffect(() => {
    if (!videoDuration) return;

    const updateTimeline = () => {
      const section = sectionRef.current;
      const video = videoRef.current;
      if (!section || !video) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const travel = rect.height - viewportHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(travel, 1));
      const progress = travel <= 0 ? 0 : scrolled / travel;
      const targetTime = videoDuration * progress;

      video.currentTime += (targetTime - video.currentTime) * 0.18;
      rafRef.current = requestAnimationFrame(updateTimeline);
    };

    rafRef.current = requestAnimationFrame(updateTimeline);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [videoDuration]);

  return (
    <section ref={sectionRef} className="relative min-h-[190vh] bg-fondo-base">
      <div className="sticky top-0 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 py-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="space-y-7">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-texto-secundario">JR Automotores · La Falda</p>
          <h1 className="text-4xl font-black leading-[0.95] text-texto-principal sm:text-5xl md:text-6xl">
            Encontrá tu próximo
            <span className="mt-2 block text-rojo">auto ideal</span>
          </h1>
          <p className="max-w-xl text-base text-texto-secundario md:text-lg">
            Selección premium de usados y nuevos con asesoramiento real, financiación flexible y acompañamiento en todo el proceso.
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
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-rojo/15 via-transparent to-texto-principal/10 blur-2xl" />
          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-3 shadow-card backdrop-blur">
            <video
              ref={videoRef}
              src="/hero/cronos-scroll.mp4"
              muted
              playsInline
              preload="auto"
              className="h-[280px] w-full rounded-[24px] bg-[#f4f4f7] object-cover sm:h-[360px] lg:h-[440px]"
            />
          </div>
          <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.14em] text-texto-secundario">
            Animación controlada por scroll
          </p>
        </div>
      </div>
    </section>
  );
}
