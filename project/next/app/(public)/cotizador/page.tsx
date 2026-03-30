import SimuladorCredito from '@/components/SimuladorCredito';

export default function CotizadorPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-4 text-4xl font-black">Cotizador y simulador de crédito</h1>
      <SimuladorCredito precioInicial={30000000} />
    </section>
  );
}
