import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spacio",
  description: "Encuentra el ambiente ideal para tí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable}`}>{children}</body>
    </html>
  );
}
