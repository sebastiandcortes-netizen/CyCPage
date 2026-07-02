import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL("https://TU-DOMINIO.com"), // descomentar y poner el dominio real al tenerlo
  title: {
    default: "Cortés & Capizzano — Estética & Cirugía",
    template: "%s — Cortés & Capizzano",
  },
  description:
    "Medicina estética y cirugía plástica. Tratamientos seguros, personalizados y de última generación con respaldo médico.",
  openGraph: {
    title: "Cortés & Capizzano — Estética & Cirugía",
    description:
      "Tratamientos estéticos y quirúrgicos de última generación con respaldo médico.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
