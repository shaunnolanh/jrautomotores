import VehiculoCard from '@/components/VehiculoCard';
import FiltrosVehiculos from '@/components/FiltrosVehiculos';
import { getVehiculos } from '@/lib/data';

export default async function VehiculosPage() {
  const vehiculos = await getVehiculos();

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-6 text-4xl font-black">Catálogo de vehículos</h1>
      <FiltrosVehiculos />
      <div className="mt-6 space-y-4">
        {vehiculos.length === 0 ? (
          <p className="rounded-xl border border-gris-borde p-6 text-gris-texto">No hay resultados para los filtros seleccionados.</p>
        ) : (
          vehiculos.map((v) => <VehiculoCard key={v.id} vehiculo={v} />)
        )}
      </div>
    </section>
  );
}
