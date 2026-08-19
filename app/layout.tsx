import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agatha Pinheiro | Desenvolvimento Web",
  description: "Desenvolvimento web, sistemas, automações e soluções digitais personalizadas para negócios.",
  icons: { icon: "/images/brand/favicon.png", apple: "/images/brand/favicon.png" },
  openGraph: {
    title: "Agatha Pinheiro | Desenvolvimento Web",
    description: "Tecnologia feita para impulsionar negócios.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
