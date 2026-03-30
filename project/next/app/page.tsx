<<<<<<< HEAD
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
=======
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import VehiculoCard from '@/components/VehiculoCard';
import { getVehiculosDestacados } from '@/lib/data';

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
              Somos una empresa familiar de La Falda dedicada a la compra y venta de automotores nuevos y usados.
            </p>
          </article>
          <article className="rounded-xl border border-gris-borde bg-gris-oscuro p-6">
            <h3 className="mb-2 text-2xl font-bold">Reseñas de clientes</h3>
            <ul className="space-y-2 text-gris-texto">
              <li>“Excelente atención tanto como la de los dueños, y el vendedor!”</li>
              <li>“Excelente servicio y me atendieron con la mejor!!!”</li>
              <li>“Muy buena atención, los autos están muy buenos.”</li>
            </ul>
          </article>
        </section>
      </div>
      <Footer />
    </>
>>>>>>> 1dfa5b4097183eabb9e323ff10e30fe08108de2a
  );
}
