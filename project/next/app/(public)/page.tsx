import HeroSection from '@/components/HeroSection';
import VehiculoCard from '@/components/VehiculoCard';
import { getVehiculosDestacados } from '@/lib/data';

export default async function HomePage() {
  const destacados = await getVehiculosDestacados();

  return (
    <div className="space-y-20 pb-20">
      <HeroSection />
      <section className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 text-3xl font-black">Vehículos destacados</h2>
        <div className="space-y-4">
          {destacados.slice(0, 6).map((v) => (
            <VehiculoCard key={v.id} vehiculo={v} />
          ))}
        </div>
      </section>
    </div>
  );
}
