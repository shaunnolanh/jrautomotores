import HeroSection from '@/components/HeroSection';
import type { Vehiculo } from '@/lib/types';
import BrandsSection from './home/BrandsSection';
import FinancePromosSection from './home/FinancePromosSection';
import ReviewsSection from './home/ReviewsSection';
import VehicleShowcaseSection from './home/VehicleShowcaseSection';

export default function HomePageContent({ destacados }: { destacados: Vehiculo[] }) {
  return (
    <div className="space-y-20 pb-20">
      <HeroSection />

      <section className="mx-auto -mt-28 max-w-5xl px-4 sm:-mt-24">
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

      <BrandsSection />
      <FinancePromosSection />
      <VehicleShowcaseSection destacados={destacados} />
      <ReviewsSection />
    </div>
  );
}
