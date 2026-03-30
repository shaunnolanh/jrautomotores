'use client';

import { useState } from 'react';

export default function AdminLoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/admin/login', { method: 'POST', body: JSON.stringify({ user, password }) });
    if (!res.ok) setError('Credenciales inválidas');
    else window.location.href = '/admin';
  }

  return (
    <div className="mx-auto mt-24 max-w-md rounded-xl border border-gris-borde bg-gris-oscuro p-6">
      <h1 className="mb-4 text-2xl font-bold">Acceso admin</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input className="w-full rounded border border-gris-borde bg-negro p-2" placeholder="Usuario" value={user} onChange={(e) => setUser(e.target.value)} />
        <input className="w-full rounded border border-gris-borde bg-negro p-2" placeholder="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <p className="text-sm text-rojo">{error}</p>}
        <button className="w-full rounded bg-rojo py-2 font-bold">Ingresar</button>
      </form>
    </div>
  );
}
