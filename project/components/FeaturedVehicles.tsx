'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Vehiculo } from '@/lib/types';

const tabs = [
  { label: 'Todos', value: 'todos' },
  { label: 'Pickup', value: 'pickup' },
  { label: 'SUV', value: 'suv' },
  { label: 'Sedan', value: 'sedan' },
  { label: 'Hatchback', value: 'hatchback' },
] as const;

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);

export default function FeaturedVehicles({ vehiculos }: { vehiculos: Vehiculo[] }) {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['value']>('todos');

  const filtered = useMemo(() => {
    const source = activeTab === 'todos' ? vehiculos : vehiculos.filter((vehiculo) => vehiculo.categoria === activeTab);
    return source.slice(0, 4);
  }, [activeTab, vehiculos]);

  return (
    <section className="bg-[#F5F5F5] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 flex items-center justify-center gap-5">
          <span className="h-px w-16 bg-[#D9D9D9]" />
          <h2 className="text-center text-3xl font-extrabold text-[#1A1A2E] md:text-4xl">Explorá nuestros vehículos</h2>
          <span className="h-px w-16 bg-[#D9D9D9]" />
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActiveTab(tab.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab.value ? 'bg-[#E8232A] text-white' : 'bg-white text-[#1A1A2E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5">
          {filtered.map((vehiculo) => (
            <article
              key={vehiculo.id}
              className="grid gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:grid-cols-[280px_1fr]"
            >
              <img
                src={vehiculo.imagen_principal || '/slide_hero_1.jpg'}
                alt={`${vehiculo.marca} ${vehiculo.modelo}`}
                className="h-44 w-full rounded-xl bg-[#F7F7F7] object-contain"
              />

              <div className="flex flex-col justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-[#1A1A2E]">
                    {vehiculo.marca} {vehiculo.modelo}
                  </h3>
                  <span className="mt-2 inline-flex rounded-full bg-[#F0F0F0] px-3 py-1 text-xs font-semibold uppercase text-[#6B6B6B]">
                    {vehiculo.es_nuevo ? 'Nuevo' : 'Usado'}
                  </span>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-[#6B6B6B]">
                    <p>
                      <span className="font-semibold">Año:</span> {vehiculo.anio}
                    </p>
                    <p>
                      <span className="font-semibold">Combustible:</span> {vehiculo.combustible}
                    </p>
                  </div>

                  <p className="mt-5 text-3xl font-extrabold text-[#1A1A2E]">{formatPrice(vehiculo.precio)}</p>
                </div>

                <Link
                  href={`/vehiculos/${vehiculo.id}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#1A1A2E] px-5 py-3 text-sm font-semibold text-white"
                >
                  Ver detalles ›
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/vehiculos" className="inline-flex rounded-full bg-[#E8232A] px-6 py-3 text-sm font-semibold text-white">
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
}
