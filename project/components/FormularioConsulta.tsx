'use client';

import { useState } from 'react';

export default function FormularioConsulta({ vehiculoId }: { vehiculoId?: string }) {
  const [ok, setOk] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    await fetch('/api/consultas', { method: 'POST', body: JSON.stringify({ ...payload, vehiculo_id: vehiculoId }) });
    setOk(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-2 rounded-xl border border-gris-borde bg-gris-oscuro p-4">
      <input className="w-full rounded bg-negro p-2" name="nombre" placeholder="Nombre" required />
      <input className="w-full rounded bg-negro p-2" name="telefono" placeholder="Teléfono" required />
      <input className="w-full rounded bg-negro p-2" name="email" placeholder="Email" />
      <textarea className="w-full rounded bg-negro p-2" name="mensaje" placeholder="Mensaje" required />
      <button className="rounded bg-rojo px-4 py-2 font-semibold">Enviar consulta</button>
      {ok && <p className="text-sm text-green-400">Consulta enviada.</p>}
    </form>
  );
}
