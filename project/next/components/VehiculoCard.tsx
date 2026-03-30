import type { Vehiculo } from '@/lib/types';
import Link from 'next/link';

export default function VehiculoCard({ vehiculo }: { vehiculo: Vehiculo }) {
  return (
    <article className="grid items-center gap-4 rounded-2xl bg-white p-4 text-black md:grid-cols-[280px_1fr]">
      <img src={vehiculo.imagen_principal || '/brand/showroom.svg'} className="h-44 w-full rounded-xl object-contain" alt={vehiculo.modelo} />
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{vehiculo.marca} {vehiculo.modelo}</h3>
        <p className="text-sm">Año: {vehiculo.anio} · Combustible: {vehiculo.combustible}</p>
        <p className="text-3xl font-bold">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(vehiculo.precio)}</p>
        <Link className="inline-block rounded-full bg-negro px-5 py-2 text-white" href={`/vehiculo/${vehiculo.id}`}>Ver detalles</Link>
        <Link className="inline-block rounded-full bg-negro px-5 py-2 text-white" href={`/vehiculos/${vehiculo.id}`}>Ver detalles</Link>
      </div>
    </article>
  );
}
