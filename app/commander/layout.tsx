import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commander en ligne",
  description:
    "Commandez vos plats à emporter au Brother's Restaurant Gennevilliers : salades, plats, pizzas, desserts et boissons.",
  openGraph: {
    title: "Commander en ligne — Brother's Restaurant Gennevilliers",
    description: "Sélectionnez vos plats et commandez à emporter en quelques clics.",
  },
}

export default function CommanderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
