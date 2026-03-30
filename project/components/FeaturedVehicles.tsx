'use client';

import { useMemo, useState } from 'react';
import type { Vehiculo } from '@/lib/types';
import Link from 'next/link';

const tabs = [
  { label: 'Todos', value: 'todos' },
  { label: 'Pickup', value: 'pickup' },
  { label: 'SUV', value: 'suv' },
  { label: 'Sedan', value: 'sedan' },
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
    if (activeTab === 'todos') return vehiculos;
    return vehiculos.filter((vehiculo) => vehiculo.categoria === activeTab);
  }, [activeTab, vehiculos]);

  return (
    <section className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-black uppercase md:text-4xl">Vehículos destacados</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase transition-colors ${
              activeTab === tab.value
                ? 'border-rojo bg-rojo text-white'
                : 'border-gris-borde text-gris-texto hover:border-white hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-7 grid gap-4">
        {filtered.map((vehiculo) => (
          <article
            key={vehiculo.id}
            className="grid gap-4 rounded-2xl border border-gris-borde bg-[#111111] p-4 md:grid-cols-[300px_1fr]"
          >
            <img
              src={vehiculo.imagen_principal || '/slide_hero_1.jpg'}
              alt={`${vehiculo.marca} ${vehiculo.modelo}`}
              className="h-48 w-full rounded-xl bg-black/30 object-contain"
            />
            <div className="flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wider text-gris-texto">Año {vehiculo.anio}</p>
                <h3 className="text-2xl font-bold text-white">
                  {vehiculo.marca} {vehiculo.modelo} {vehiculo.version || ''}
                </h3>
                <p className="text-sm text-gris-texto">Combustible: {vehiculo.combustible}</p>
                <p className="text-3xl font-black text-white">{formatPrice(vehiculo.precio)}</p>
              </div>
              <Link
                href={`/vehiculos/${vehiculo.id}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-negro px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gris-medio"
              >
                Ver detalles <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
