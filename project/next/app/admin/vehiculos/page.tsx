'use client';

import { useEffect, useState } from 'react';
import type { Vehiculo } from '@/lib/types';

const initialForm = {
  marca: '', modelo: '', anio: 2020, precio: 0, kilometraje: 0, combustible: 'nafta', transmision: 'manual', categoria: 'suv', es_nuevo: false, estado: 'disponible', destacado: false,
};

export default function AdminVehiculosPage() {
  const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
  const [form, setForm] = useState<Record<string, unknown>>(initialForm);
  const [editId, setEditId] = useState<string | null>(null);

  async function load() {
    const res = await fetch('/api/vehiculos?all=1');
    if (res.ok) setVehiculos(await res.json());
  }

  useEffect(() => { void load(); }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/vehiculos/${editId}` : '/api/vehiculos';
    const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    if (res.ok) {
      setForm(initialForm);
      setEditId(null);
      await load();
    }
  }

  async function remove(id: string) {
    if (!confirm('¿Eliminar vehículo?')) return;
    const res = await fetch(`/api/vehiculos/${id}`, { method: 'DELETE' });
    if (res.ok) await load();
  }

  return (
    <section className="space-y-5 p-6">
      <h1 className="text-3xl font-black">Gestión de vehículos</h1>
      <form onSubmit={save} className="grid gap-2 rounded-xl border border-gris-borde bg-gris-oscuro p-4 md:grid-cols-4">
        {['marca','modelo','anio','precio','kilometraje','combustible','transmision','categoria','estado'].map((field) => (
          <input key={field} className="rounded bg-negro p-2" placeholder={field} value={String(form[field] ?? '')} onChange={(e) => setForm((prev) => ({ ...prev, [field]: ['anio','precio','kilometraje'].includes(field) ? Number(e.target.value) : e.target.value }))} />
        ))}
        <button className="rounded bg-rojo p-2 font-semibold md:col-span-4">{editId ? 'Actualizar vehículo' : 'Agregar vehículo'}</button>
      </form>

      <div className="overflow-auto rounded-xl border border-gris-borde">
        <table className="w-full text-left text-sm">
          <thead className="bg-gris-oscuro"><tr><th className="p-2">Modelo</th><th>Año</th><th>Precio</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {vehiculos.map((v) => (
              <tr key={v.id} className="border-t border-gris-borde">
                <td className="p-2">{v.marca} {v.modelo}</td>
                <td>{v.anio}</td><td>{v.precio}</td><td>{v.estado}</td>
                <td className="space-x-2">
                  <button className="text-blue-400" onClick={() => { setEditId(v.id); setForm(v as unknown as Record<string, unknown>); }}>Editar</button>
                  <button className="text-rojo" onClick={() => remove(v.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
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
