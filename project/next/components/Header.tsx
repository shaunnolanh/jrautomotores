import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gris-borde/50 bg-negro/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-black"><span className="text-rojo">JR</span> AUTOMOTORES</Link>
        <div className="hidden gap-6 md:flex">
          <Link href="/vehiculos">Vehículos</Link><Link href="/cotizador">Cotizador</Link><Link href="/contacto">Contacto</Link>
        </div>
        <a href="https://wa.me/5493548503428" className="rounded-lg bg-rojo px-4 py-2 font-semibold">Consultar</a>
      </nav>
    </header>
  );
}
