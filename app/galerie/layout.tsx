import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Découvrez en images les plats, pizzas, desserts et l'intérieur du Brother's Restaurant Gennevilliers.",
  openGraph: {
    title: "Galerie — Brother's Restaurant Gennevilliers",
    description: "Photos de nos plats, pizzas maison, desserts et de notre salle de restaurant.",
  },
}

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
