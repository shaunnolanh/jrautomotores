import { brands } from '@/data/home-content';

export default function BrandsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl bg-fondo-suave px-6 py-7">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-texto-secundario">Marcas</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <article key={brand.name} className="rounded-2xl border border-white bg-white px-4 py-5 text-center shadow-card">
              <img src={brand.logo} alt={brand.name} className="mx-auto h-14 w-14 object-contain" />
              <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-texto-principal">{brand.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
