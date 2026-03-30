'use client';
import { useMemo, useState } from 'react';

function calcularCuota(monto: number, tna: number, cuotas: number) {
  const tm = tna / 100 / 12;
  return Math.round((monto * (tm * Math.pow(1 + tm, cuotas))) / (Math.pow(1 + tm, cuotas) - 1));
}

export default function SimuladorCredito({ precioInicial }: { precioInicial: number }) {
  const [anticipo, setAnticipo] = useState(20);
  const [cuotas, setCuotas] = useState(36);
  const [tna, setTna] = useState(65);
  const monto = useMemo(() => precioInicial * (1 - anticipo / 100), [anticipo, precioInicial]);
  const cuota = useMemo(() => calcularCuota(monto, tna, cuotas), [monto, tna, cuotas]);

  return (
    <div className="rounded-xl border border-gris-borde bg-gris-oscuro p-4">
      <h3 className="mb-2 text-xl font-bold">Simulá tu crédito</h3>
      <div className="grid gap-2 text-sm">
        <label>Anticipo: {anticipo}% <input type="range" min={0} max={70} value={anticipo} onChange={(e) => setAnticipo(Number(e.target.value))} /></label>
        <label>Cuotas: <select value={cuotas} onChange={(e) => setCuotas(Number(e.target.value))}><option>12</option><option>24</option><option>36</option><option>48</option><option>60</option></select></label>
        <label>TNA: <input type="number" value={tna} onChange={(e) => setTna(Number(e.target.value))} className="ml-2 rounded bg-negro p-1" /></label>
      </div>
      <p className="mt-3">Monto financiado: {monto.toLocaleString('es-AR')}</p>
      <p>Cuota mensual estimada: {cuota.toLocaleString('es-AR')}</p>
      <p className="mt-2 text-xs text-gris-texto">Simulación orientativa. Consultá condiciones reales con tu banco o financiera.</p>
    </div>
  );
}
