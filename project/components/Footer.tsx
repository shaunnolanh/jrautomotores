export default function Footer() {
  return (
    <footer className="border-t border-gris-borde bg-[#090909] py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div>
          <p className="text-2xl font-black tracking-wide">
            <span className="text-rojo">JR</span> AUTOMOTORES
          </p>
          <p className="mt-3 text-sm text-gris-texto">Av. España 1090, La Falda, Córdoba</p>
        </div>
        <div className="space-y-2 text-sm text-gris-texto md:text-right">
          <p>Lunes a Viernes · 9:00 a 13:00 y 16:30 a 20:00</p>
          <p>Teléfono: 03548 50-3428</p>
          <a href="https://wa.me/5493548503428" className="inline-block text-rojo hover:text-white">
            WhatsApp: +54 9 3548 50-3428
          </a>
        </div>
      </div>
    </footer>
  );
}
