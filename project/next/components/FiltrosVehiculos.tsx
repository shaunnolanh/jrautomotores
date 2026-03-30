'use client';

export default function FiltrosVehiculos() {
  return (
    <div className="grid gap-2 rounded-xl border border-gris-borde bg-gris-oscuro p-4 md:grid-cols-5">
      {['Categoría', 'Condición', 'Precio', 'Marca', 'Combustible'].map((f) => (
        <select key={f} className="rounded border border-gris-borde bg-negro p-2 text-sm"><option>{f}</option></select>
      ))}
    </div>
  );
}
