import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV — Aaron de Netto",
  description: "Professional journey, accomplishments, and skills of Aaron de Netto, UX UI Design Lead.",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
