import SimuladorCredito from '@/components/SimuladorCredito';
import FormularioConsulta from '@/components/FormularioConsulta';
import { getVehiculoById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function VehiculoDetallePage({ params }: { params: { id: string } }) {
  const vehiculo = await getVehiculoById(params.id);
  if (!vehiculo) notFound();

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-2">
      <div className="rounded-xl border border-gris-borde bg-gris-oscuro p-4">
        <img src={vehiculo.imagen_principal || '/brand/showroom.svg'} className="h-[320px] w-full rounded-lg object-contain" alt={vehiculo.modelo} />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-black">{vehiculo.marca} {vehiculo.modelo}</h1>
        <p className="text-3xl font-bold text-rojo">{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(vehiculo.precio)}</p>
        <p className="text-gris-texto">{vehiculo.descripcion || 'Sin descripción.'}</p>
        <a className="inline-block rounded-lg bg-rojo px-4 py-3 font-bold" href="https://wa.me/5493548503428" target="_blank">Consultar por WhatsApp</a>
        <SimuladorCredito precioInicial={vehiculo.precio} />
        <FormularioConsulta vehiculoId={vehiculo.id} />
      </div>
    </section>
  );
}
