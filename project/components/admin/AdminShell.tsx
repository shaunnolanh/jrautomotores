import Link from 'next/link';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-negro text-white">
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-gris-borde bg-gris-oscuro p-4">
        <p className="mb-4 text-xl font-black">Admin JR</p>
        <nav className="space-y-2"><Link href="/admin">Dashboard</Link><br /><Link href="/admin/vehiculos">Vehículos</Link><br /><Link href="/admin/consultas">Consultas</Link></nav>
      </aside>
      <div className="ml-64">{children}</div>
    </div>
  );
}
