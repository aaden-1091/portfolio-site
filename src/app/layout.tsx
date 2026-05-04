import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aaron de Netto | UX UI Design Lead",
  description:
    "Aaron de Netto — UX/UI Design Lead with experience in e-commerce, SaaS, design systems, and accessibility. Based in Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
