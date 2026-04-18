import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Brother's Restaurant Gennevilliers. Adresse : 148 avenue Gabriel Péri, 92230 Gennevilliers. Tél : 01 47 90 25 72.",
  openGraph: {
    title: "Contact — Brother's Restaurant Gennevilliers",
    description: "Retrouvez nos coordonnées, horaires et envoyez-nous un message.",
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
