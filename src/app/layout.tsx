import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thalita Terapias - Barras de Access & Terapias Holísticas",
  description:
    "Especialista em Barras de Access e terapias holísticas. Transforme sua vida com mais leveza, clareza e bem-estar. Agende sua consulta!",
  keywords:
    "barras de access, terapia holística, bem-estar, São Paulo, terapeuta, ansiedade, stress, autoconhecimento",
  authors: [{ name: "Thalita" }],
  openGraph: {
    title: "Thalita Terapias - Barras de Access & Terapias Holísticas",
    description:
      "Especialista em Barras de Access e terapias holísticas. Transforme sua vida com mais leveza, clareza e bem-estar.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
