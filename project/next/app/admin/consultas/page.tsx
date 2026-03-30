import ConsultasTable from '@/components/admin/ConsultasTable';
import { getConsultas } from '@/lib/data';

export default async function AdminConsultasPage() {
  const consultas = await getConsultas();
  return <section className="p-6"><h1 className="mb-4 text-3xl font-black">Consultas</h1><ConsultasTable consultas={consultas} /></section>;
}
