import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre carte",
  description:
    "Découvrez la carte complète du Brother's Restaurant : salades, plats traditionnels, pizzas maison, desserts et boissons. Disponible en français, anglais et espagnol.",
  openGraph: {
    title: "Notre carte — Brother's Restaurant Gennevilliers",
    description: "Salades composées, plats du jour, pizzas artisanales, desserts maison et boissons.",
  },
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
