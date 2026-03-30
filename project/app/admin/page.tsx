import { getConsultas, getVehiculos } from '@/lib/data';

export default async function AdminDashboardPage() {
  const [vehiculos, consultas] = await Promise.all([getVehiculos(true), getConsultas()]);
  return (
    <section className="space-y-6 p-6">
      <h1 className="text-3xl font-black">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-gris-borde bg-gris-oscuro p-4">Vehículos disponibles: {vehiculos.filter(v => v.estado === 'disponible').length}</div>
        <div className="rounded-xl border border-gris-borde bg-gris-oscuro p-4">Consultas nuevas: {consultas.filter(c => c.estado === 'nuevo').length}</div>
      </div>
    </section>
  );
}
