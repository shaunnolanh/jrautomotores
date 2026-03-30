'use client';

export default function VehiculoForm() {
  return (
    <form className="grid gap-2 rounded-xl border border-gris-borde bg-gris-oscuro p-4 md:grid-cols-3">
      {['marca', 'modelo', 'anio', 'precio', 'kilometraje', 'color', 'version'].map((name) => (
        <input key={name} className="rounded bg-negro p-2" placeholder={name} name={name} />
      ))}
      <button className="rounded bg-rojo p-2 font-semibold">Guardar vehículo</button>
    </form>
  );
}
