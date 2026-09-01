import type { Metadata } from "next";
import "./globals.css";
import "./logo-fixes.css";

export const metadata: Metadata = {
  title: {
    default: "FM Academy | Mentoria de Muay Thai",
    template: "%s | FM Academy",
  },
  description:
    "Mentorias com Francisco Mairon para atletas que querem evoluir e profissionais que querem viver do Muay Thai.",
  keywords: [
    "Muay Thai",
    "mentoria de Muay Thai",
    "performance no Muay Thai",
    "viver do Muay Thai",
    "Francisco Mairon",
    "FM Academy",
  ],
  openGraph: {
    title: "FM Academy | Conhecimento para ir mais longe",
    description:
      "Escolha o seu próximo nível dentro ou fora do ringue com Francisco Mairon.",
    type: "website",
    locale: "pt_BR",
    siteName: "FM Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "FM Academy | Mentoria de Muay Thai",
    description: "Conhecimento, experiência e direção para o seu próximo nível.",
  },
  icons: {
    icon: "/assets/fm-academy-logo.png",
    shortcut: "/assets/fm-academy-logo.png",
    apple: "/assets/fm-academy-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
