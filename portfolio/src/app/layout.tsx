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
  title: "Portfolio | Product Designer",
  description:
    "Product Designer blurring the lines between structural logic and emotional resonance.",
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
