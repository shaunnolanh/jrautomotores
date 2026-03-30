'use client';

import { useEffect, useState } from 'react';
import type { Consulta } from '@/lib/types';

export default function AdminConsultasPage() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);

  async function load() {
    const res = await fetch('/api/consultas');
    if (res.ok) setConsultas(await res.json());
  }

  useEffect(() => { void load(); }, []);

  async function updateEstado(id: string, estado: Consulta['estado']) {
    const res = await fetch(`/api/consultas/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ estado }) });
    if (res.ok) await load();
  }

  return (
    <section className="p-6">
      <h1 className="mb-4 text-3xl font-black">Consultas</h1>
      <div className="overflow-auto rounded-xl border border-gris-borde">
        <table className="w-full text-left text-sm">
          <thead className="bg-gris-oscuro"><tr><th className="p-2">Fecha</th><th>Nombre</th><th>Teléfono</th><th>Mensaje</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {consultas.map((c) => (
              <tr key={c.id} className="border-t border-gris-borde">
                <td className="p-2">{new Date(c.created_at).toLocaleDateString('es-AR')}</td>
                <td>{c.nombre}</td>
                <td><a href={`https://wa.me/54${c.telefono.replace(/\D/g, '')}`} className="text-rojo">{c.telefono}</a></td>
                <td>{c.mensaje}</td>
                <td>{c.estado}</td>
                <td className="space-x-2">
                  <button className="text-blue-400" onClick={() => updateEstado(c.id, 'respondido')}>Respondido</button>
                  <button className="text-yellow-400" onClick={() => updateEstado(c.id, 'archivado')}>Archivar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
import ConsultasTable from '@/components/admin/ConsultasTable';
import { getConsultas } from '@/lib/data';

export default async function AdminConsultasPage() {
  const consultas = await getConsultas();
  return <section className="p-6"><h1 className="mb-4 text-3xl font-black">Consultas</h1><ConsultasTable consultas={consultas} /></section>;
}
