import VehiculoForm from '@/components/admin/VehiculoForm';
import { getVehiculos } from '@/lib/data';

export default async function AdminVehiculosPage() {
  const vehiculos = await getVehiculos(true);
  return (
    <section className="space-y-5 p-6">
      <h1 className="text-3xl font-black">Gestión de vehículos</h1>
      <VehiculoForm />
      <div className="overflow-auto rounded-xl border border-gris-borde">
        <table className="w-full text-left text-sm">
          <thead className="bg-gris-oscuro"><tr><th className="p-2">Modelo</th><th>Año</th><th>Precio</th><th>Estado</th></tr></thead>
          <tbody>{vehiculos.map(v => <tr key={v.id} className="border-t border-gris-borde"><td className="p-2">{v.marca} {v.modelo}</td><td>{v.anio}</td><td>{v.precio}</td><td>{v.estado}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
