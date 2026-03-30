import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JR Automotores | La Falda, Córdoba",
  description: "Compra y venta de automotores nuevos y usados en La Falda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
