import HomePageContent from '@/components/HomePageContent';
import { getVehiculosDestacados } from '@/lib/data';

export default async function HomePage() {
  const destacados = await getVehiculosDestacados();

  return <HomePageContent destacados={destacados.slice(0, 8)} />;
}
