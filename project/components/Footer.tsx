export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1A1A2E] py-10 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div>
          <p className="text-2xl font-black tracking-wide">JR AUTOMOTORES</p>
          <p className="mt-3 text-sm text-white/80">Av. España 1090, La Falda, Córdoba</p>
        </div>

        <div className="space-y-2 text-sm text-white/80 md:text-right">
          <p>Lun-Vie 9:00-13:00 y 16:00-20:00</p>
          <p>Teléfono: 03548 50-3428</p>
          <a
            href="https://wa.me/5493548503428"
            className="inline-flex rounded-full bg-[#25D366] px-4 py-2 font-semibold text-[#0f3f25]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
