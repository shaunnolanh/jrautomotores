import HeroSection from '@/components/HeroSection';
import FeaturedVehicles from '@/components/FeaturedVehicles';
import type { Vehiculo } from '@/lib/types';

const marcas = ['Toyota', 'Volkswagen', 'Ford', 'Chevrolet', 'RAM', 'Renault', 'Peugeot'];

const reviews = [
  {
    nombre: 'Micaela C.',
    texto: 'Excelente atención tanto como la de los dueños, y el vendedor! Muy recomendable.',
  },
  {
    nombre: 'Federico R.',
    texto: 'Excelente servicio y me atendieron con la mejor!!! Súper conformes con la compra.',
  },
  {
    nombre: 'Sergio P.',
    texto: 'Muy buena atención, los autos están muy buenos. Volvería a elegirlos.',
  },
];

export default function HomePageContent({ destacados }: { destacados: Vehiculo[] }) {
  return (
    <div className="space-y-16 pb-20">
      <HeroSection />

      <section className="mx-auto -mt-24 max-w-6xl px-4 sm:-mt-16">
        <div className="grid gap-3 rounded-2xl bg-white p-3 text-black shadow-2xl shadow-black/30 md:grid-cols-[1fr_1fr_1fr_auto]">
          {['Nuevo/Usado', 'Marca', 'Modelo'].map((field) => (
            <select key={field} className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium">
              <option>{field}</option>
            </select>
          ))}
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-rojo px-5 py-3 text-sm font-semibold text-white">
            <span aria-hidden>⌕</span> Buscar
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-gris-borde py-5">
          {marcas.map((marca) => (
            <span
              key={marca}
              className="text-lg font-semibold uppercase tracking-widest text-white/35 transition-colors hover:text-white"
            >
              {marca}
            </span>
          ))}
        </div>
      </section>

      <FeaturedVehicles vehiculos={destacados} />

      <section className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1.1fr_1fr]">
        <img
          src="/slide_hero_1.jpg"
          alt="JR Automotores en La Falda"
          className="h-[340px] w-full rounded-3xl border border-gris-borde bg-[#101010] object-contain p-4"
        />
        <article className="rounded-3xl border border-gris-borde bg-[#111111] p-8">
          <h3 className="text-3xl font-black uppercase">Quiénes somos</h3>
          <p className="mt-4 text-gris-texto">
            Somos una empresa familiar de La Falda, Córdoba, dedicada a la compra y venta de automotores nuevos y
            usados.
          </p>
          <p className="mt-4 text-gris-texto">
            Hace más de 5 años acompañamos a nuestros clientes con asesoramiento cercano, transparencia y un servicio
            personalizado.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h3 className="text-3xl font-black uppercase md:text-4xl">Reseñas de clientes</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.nombre} className="rounded-2xl border border-gris-borde bg-[#111111] p-6">
              <p className="text-sm leading-relaxed text-gris-texto">“{review.texto}”</p>
              <p className="mt-5 text-sm font-semibold text-white">{review.nombre}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
