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
      <h2 className="text-center text-3xl font-black text-texto-principal md:text-4xl">Vehículos destacados</h2>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => setActiveTab(tab.value)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === tab.value ? 'bg-rojo text-white' : 'bg-white text-texto-secundario shadow-card hover:text-texto-principal'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5">
        {filtered.map((vehiculo) => (
          <article key={vehiculo.id} className="grid gap-4 rounded-3xl bg-white p-4 shadow-card md:grid-cols-[320px_1fr] md:p-5">
            <img
              src={vehiculo.imagen_principal || '/slide_hero_1.jpg'}
              alt={`${vehiculo.marca} ${vehiculo.modelo}`}
              className="h-52 w-full rounded-2xl bg-fondo-suave object-cover"
            />
            <div className="flex flex-col justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-texto-secundario">Año {vehiculo.anio}</p>
                <h3 className="text-2xl font-bold text-texto-principal">
                  {vehiculo.marca} {vehiculo.modelo} {vehiculo.version || ''}
                </h3>
                <p className="text-sm text-texto-secundario">Combustible: {vehiculo.combustible}</p>
                <p className="text-3xl font-black text-texto-principal">{formatPrice(vehiculo.precio)}</p>
              </div>
              <Link
                href={`/vehiculos/${vehiculo.id}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-texto-principal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#111122]"
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
