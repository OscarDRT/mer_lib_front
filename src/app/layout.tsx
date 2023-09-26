import "../globals.scss";
import type { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "Clone de Mercado Libre - Prueba Técnica",
  description:
    "Este proyecto es un clone de Mercado Libre desarrollado como parte de una prueba técnica para demostrar habilidades de desarrollo web, utilizando tecnologías como Next.js, React y SCSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
