import HeroSection from '@/components/HeroSection';
import FeaturedVehicles from '@/components/FeaturedVehicles';
import type { Vehiculo } from '@/lib/types';

const marcas = ['Toyota', 'Volkswagen', 'Ford', 'Chevrolet', 'RAM', 'Renault', 'Peugeot'];

const reviews = [
  {
    name: 'Julián M.',
    initials: 'JM',
    text: 'Excelente atención tanto como la de los dueños, y el vendedor!',
  },
  {
    name: 'María G.',
    initials: 'MG',
    text: 'Excelente servicio y me atendieron con la mejor!!!',
  },
  {
    name: 'Carlos R.',
    initials: 'CR',
    text: 'Muy buena atención, los autos están muy buenos.',
  },
];

export default function HomePageContent({ destacados }: { destacados: Vehiculo[] }) {
  return (
    <div className="bg-white">
      <HeroSection />

      <section className="relative z-10 mx-auto -mt-8 max-w-[720px] px-4 pb-14 md:-mt-12">
        <div className="grid gap-0 rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_8px_32px_rgba(0,0,0,0.10)] md:grid-cols-[1fr_1fr_1fr_auto] md:px-6 md:py-5">
          {['Nuevo / Usado', 'Marca', 'Modelo'].map((field, index) => (
            <select
              key={field}
              className={`rounded-lg px-3 py-3 text-sm font-medium text-[#1A1A2E] outline-none ${
                index < 2 ? 'md:border-r md:border-[#E8E8E8]' : ''
              }`}
            >
              <option>{field}</option>
            </select>
          ))}
          <button
            type="button"
            className="mt-2 inline-flex h-11 w-11 items-center justify-center justify-self-center rounded-full bg-[#E8232A] text-lg text-white md:mt-0"
            aria-label="Buscar"
          >
            ⌕
          </button>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#D9D9D9]" />
            <h2 className="text-3xl font-extrabold text-[#1A1A2E]">Marcas</h2>
            <span className="h-px w-16 bg-[#D9D9D9]" />
          </div>

          <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-4 lg:grid-cols-7">
            {marcas.map((marca) => (
              <article key={marca} className="group rounded-xl border border-[#F0F0F0] p-4">
                <div className="text-3xl font-black tracking-wider text-[#CCCCCC] transition-colors group-hover:text-[#1A1A2E]">
                  {marca.slice(0, 1)}
                </div>
                <p className="mt-2 text-sm font-semibold text-[#CCCCCC] transition-colors group-hover:text-[#1A1A2E]">
                  {marca}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeaturedVehicles vehiculos={destacados} />

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 lg:grid-cols-2">
          <img
            src="/slide_hero_2.jpg"
            alt="Equipo JR Automotores"
            className="h-full min-h-[320px] w-full rounded-r-2xl object-cover"
          />
          <article className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8232A]">Sobre nosotros</p>
            <h3 className="mt-3 text-4xl font-extrabold leading-tight text-[#1A1A2E]">
              Empresa familiar con más de 5 años en La Falda
            </h3>
            <p className="mt-4 max-w-xl text-base text-[#6B6B6B]">
              Trabajamos con cercanía, transparencia y una selección cuidada de autos nuevos y usados para acompañarte
              en cada decisión.
            </p>
            <a
              href="/contacto"
              className="mt-6 inline-flex w-fit rounded-full border border-[#1A1A2E] px-6 py-3 text-sm font-semibold text-[#1A1A2E]"
            >
              Conocenos ›
            </a>
          </article>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-[#D9D9D9]" />
            <h3 className="text-center text-3xl font-extrabold text-[#1A1A2E]">Reseñas de clientes</h3>
            <span className="h-px w-16 bg-[#D9D9D9]" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <article
                key={review.name}
                className={`rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
                  index === 1 ? 'border-l-4 border-l-[#E8232A]' : ''
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F0F0] text-sm font-bold text-[#1A1A2E]">
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A2E]">{review.name}</p>
                    <p className="text-xs text-[#6B6B6B]">Compró en JR Automotores</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">“{review.text}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
