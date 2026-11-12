import type { Metadata } from "next";
import { Stardos_Stencil, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import { SiteModals } from "@/components/SiteModals";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CurtainPreloader } from "@/components/CurtainPreloader";

const stardosStencil = Stardos_Stencil({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rooms-stencil",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-rooms-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hotel | Descanso, Arquitectura y Gastronomía",
  description:
    "Un refugio de descanso, confort y alta cocina diseñado para ofrecerte una estadía serena y personalizada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${stardosStencil.variable} ${josefinSans.variable}`}
    >
      <body className="antialiased">
        <CurtainPreloader />
        <ModalProvider>
          <SmoothScrollProvider>
            {children}
            <SiteModals />
          </SmoothScrollProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
