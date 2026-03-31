import FeaturedVehicles from '@/components/FeaturedVehicles';
import { sampleVehicles } from '@/data/home-content';
import type { Vehiculo } from '@/lib/types';

export default function VehicleShowcaseSection({ destacados }: { destacados: Vehiculo[] }) {
  return (
    <section className="space-y-10 bg-fondo-suave py-16">
      <FeaturedVehicles vehiculos={destacados} />

      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rojo">Catálogo sugerido</p>
            <h3 className="mt-2 text-2xl font-black text-texto-principal md:text-3xl">Más opciones para comparar</h3>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sampleVehicles.map((vehicle) => (
            <article key={`${vehicle.nombre}-${vehicle.anio}`} className="rounded-2xl bg-white p-3 shadow-card">
              <img src={vehicle.image} alt={vehicle.nombre} className="h-40 w-full rounded-xl bg-fondo-suave object-contain p-3" />
              <div className="space-y-1 p-2">
                <h4 className="font-bold text-texto-principal">
                  {vehicle.nombre} {vehicle.anio}
                </h4>
                <p className="text-sm text-texto-secundario">{vehicle.kilometraje}</p>
                <p className="text-sm font-semibold text-texto-principal">{vehicle.precio}</p>
                <button className="pt-2 text-sm font-semibold text-rojo">{vehicle.cta} →</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
