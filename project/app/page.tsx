import HomePageContent from '@/components/HomePageContent';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getVehiculosDestacados } from '@/lib/data';

export default async function HomePage() {
  const destacados = await getVehiculosDestacados();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HomePageContent destacados={destacados.slice(0, 8)} />
      </main>
      <Footer />
    </>
  );
}
