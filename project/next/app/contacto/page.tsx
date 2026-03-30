import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormularioConsulta from '@/components/FormularioConsulta';

export default function ContactoPage() {
  return (
    <>
      <Header />
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-4xl font-black">Contacto</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-gris-borde bg-gris-oscuro p-6">
            <p>Av. España 1090, X5172 La Falda, Córdoba</p>
            <a href="tel:+543548503428" className="text-rojo">03548 50-3428</a>
            <a href="https://wa.me/5493548503428" target="_blank" className="text-rojo">WhatsApp</a>
            <p>Lunes a Viernes 9:00 a 13:00 y 16:00 a 20:00</p>
            <iframe className="mt-4 h-64 w-full rounded-lg" src="https://maps.google.com/maps?q=-31.0833,-64.4833&z=13&output=embed" loading="lazy" />
          </div>
          <FormularioConsulta />
        </div>
      </section>
      <Footer />
    </>
  );
}
