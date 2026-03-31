import { reviews } from '@/data/home-content';

export default function ReviewsSection() {
  const loop = [...reviews, ...reviews];

  return (
    <section className="mx-auto max-w-6xl px-4">
      <h3 className="text-center text-3xl font-black text-texto-principal md:text-4xl">Reseñas de clientes</h3>
      <div className="mt-7 overflow-hidden">
        <div className="reviews-track flex gap-4">
          {loop.map((review, index) => (
            <article key={`${review.nombre}-${index}`} className="min-h-[170px] min-w-[280px] rounded-2xl bg-white p-6 shadow-card md:min-w-[360px]">
              <p className="text-sm leading-relaxed text-texto-secundario">“{review.texto}”</p>
              <p className="mt-5 text-sm font-semibold text-texto-principal">{review.nombre}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
