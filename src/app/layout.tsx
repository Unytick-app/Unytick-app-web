import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import GlobalContextProvider from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "Unyitick - Panel Operativo",
  description:
    "Panel Operativo para la gestión de ventas, clientes y reportes de Unyiticket. Administra tus operaciones de manera eficiente con nuestra plataforma optimizada para tu negocio.",
  icons: {
    icon: "/globe.svg",
  },
  openGraph: {
    title: "Unyitick - Panel Operativo",
    description:
      "Panel Operativo para la gestión de ventas, clientes y reportes de Unyiticket. Administra tus operaciones de manera eficiente con nuestra plataforma optimizada para tu negocio.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
