import { financePromos } from '@/data/home-content';

export default function FinancePromosSection() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-card md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rojo">Financiación</p>
        <h2 className="mt-2 text-3xl font-black text-texto-principal md:text-4xl">Promociones bancarias y crédito automotor</h2>
        <p className="mt-3 max-w-3xl text-texto-secundario">
          Sección lista para cargar promociones reales desde <code>/public/products</code>.
        </p>

        {financePromos.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 bg-fondo-suave px-5 py-6 text-sm text-texto-secundario">
            No hay assets cargados en <code>/public/products</code> en este entorno. Dejé el array <code>financePromos</code> editable para que sumes campañas con imagen, título, subtítulo y CTA.
          </div>
        ) : (
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {financePromos.map((promo) => (
              <article key={promo.title} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <img src={promo.image} alt={promo.title} className="h-44 w-full object-cover" />
                <div className="space-y-2 p-4">
                  <h3 className="text-lg font-bold text-texto-principal">{promo.title}</h3>
                  <p className="text-sm text-texto-secundario">{promo.subtitle}</p>
                  <button className="pt-2 text-sm font-semibold text-rojo">{promo.cta} →</button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
