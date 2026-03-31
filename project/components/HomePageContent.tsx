import HeroSection from '@/components/HeroSection';
import FeaturedVehicles from '@/components/FeaturedVehicles';
import type { Vehiculo } from '@/lib/types';

const marcas = ['Ferrari', 'Toyota', 'Audi', 'Honda', 'Tesla', 'Ford', 'Volkswagen'];

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
    <div className="space-y-20 pb-20">
      <HeroSection />

      <section className="mx-auto -mt-36 max-w-5xl px-4 sm:-mt-28">
        <div className="grid gap-3 rounded-2xl bg-white p-3 shadow-card md:grid-cols-[1fr_1fr_1fr_auto]">
          {['Nuevo / Usado', 'Marca', 'Modelo'].map((field) => (
            <select key={field} className="rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-texto-principal">
              <option>{field}</option>
            </select>
          ))}
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-rojo px-5 py-3 text-sm font-semibold text-white">
            <span aria-hidden>⌕</span> Buscar
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-fondo-suave px-6 py-7">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-texto-secundario">Marcas</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {marcas.map((marca) => (
              <span
                key={marca}
                className="text-2xl font-semibold uppercase tracking-wider text-texto-secundario/55 transition-all hover:-translate-y-0.5 hover:text-texto-principal"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fondo-suave py-16">
        <FeaturedVehicles vehiculos={destacados} />
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.1fr]">
        <img
          src="/slide_hero_1.jpg"
          alt="JR Automotores en La Falda"
          className="h-[360px] w-full rounded-3xl bg-fondo-suave object-cover shadow-card"
        />
        <article className="rounded-3xl bg-white p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rojo">Quiénes somos</p>
          <h3 className="mt-3 text-3xl font-black text-texto-principal md:text-4xl">Atención cercana, vehículos reales</h3>
          <p className="mt-4 text-texto-secundario">
            Somos una empresa familiar de La Falda, Córdoba, dedicada a la compra y venta de automotores nuevos y usados.
          </p>
          <p className="mt-4 text-texto-secundario">
            Hace más de 5 años acompañamos a nuestros clientes con asesoramiento cercano, transparencia y un servicio
            personalizado.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <h3 className="text-center text-3xl font-black text-texto-principal md:text-4xl">Reseñas de clientes</h3>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.nombre} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-sm leading-relaxed text-texto-secundario">“{review.texto}”</p>
              <p className="mt-5 text-sm font-semibold text-texto-principal">{review.nombre}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
