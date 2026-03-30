import type { Consulta } from '@/lib/types';

export default function ConsultasTable({ consultas }: { consultas: Consulta[] }) {
  return (
    <div className="overflow-auto rounded-xl border border-gris-borde">
      <table className="w-full text-left text-sm">
        <thead className="bg-gris-oscuro"><tr><th className="p-2">Fecha</th><th>Nombre</th><th>Teléfono</th><th>Estado</th></tr></thead>
        <tbody>
          {consultas.map((c) => <tr key={c.id} className="border-t border-gris-borde"><td className="p-2">{new Date(c.created_at).toLocaleDateString('es-AR')}</td><td>{c.nombre}</td><td><a href={`https://wa.me/54${c.telefono.replace(/\D/g,'')}`} className="text-rojo">{c.telefono}</a></td><td>{c.estado}</td></tr>)}
        </tbody>
      </table>
    </div>
  );
}
