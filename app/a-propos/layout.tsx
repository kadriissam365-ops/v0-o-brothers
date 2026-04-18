import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire et les valeurs du Brother's Restaurant Gennevilliers, ouvert en 2023 au cœur de Gennevilliers.",
  openGraph: {
    title: "À propos — Brother's Restaurant Gennevilliers",
    description: "Notre histoire, nos valeurs et notre équipe passionnée.",
  },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
