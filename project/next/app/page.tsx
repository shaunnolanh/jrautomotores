import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VehiculoCard from "@/components/VehiculoCard";
import { getVehiculosDestacados } from "@/lib/data";

export default async function HomePage() {
  const destacados = await getVehiculosDestacados();

  return (
    <>
      <Header />
      <div className="space-y-16 pb-20">
        <HeroSection />

        <section className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-3xl font-black">Vehículos destacados</h2>
          <div className="space-y-4">
            {destacados.slice(0, 6).map((vehiculo) => (
              <VehiculoCard key={vehiculo.id} vehiculo={vehiculo} />
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <article className="rounded-xl border border-gris-borde bg-gris-oscuro p-6">
            <h3 className="mb-2 text-2xl font-bold">Quiénes somos</h3>
            <p className="text-gris-texto">
              Somos una empresa familiar de La Falda dedicada a la compra y
              venta de automotores nuevos y usados.
            </p>
          </article>
          <article className="rounded-xl border border-gris-borde bg-gris-oscuro p-6">
            <h3 className="mb-2 text-2xl font-bold">Reseñas de clientes</h3>
            <ul className="space-y-2 text-gris-texto">
              <li>
                "Excelente atención tanto como la de los dueños, y el vendedor!"
              </li>
              <li>"Excelente servicio y me atendieron con la mejor!!!"</li>
              <li>"Muy buena atención, los autos están muy buenos."</li>
            </ul>
          </article>
        </section>
      </div>
      <Footer />
    </>
  );
}
