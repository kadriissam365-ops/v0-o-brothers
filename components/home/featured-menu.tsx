"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { track } from "@/lib/track"

type Category = {
  title: string
  description: string
  image: string
  href: string
  alt: string
}

const categories: Category[] = [
  {
    title: "Salades Composées",
    description: "Nos salades fraîches et généreuses, préparées avec des ingrédients de qualité.",
    image: "/gourmet-caesar-salad.png",
    href: "/menu#salades",
    alt: "Salade César gourmande maison",
  },
  {
    title: "Plats Traditionnels",
    description: "Des plats savoureux et généreux, préparés avec passion.",
    image: "/images/plats-traditionnels.png",
    href: "/menu#plats",
    alt: "Plats traditionnels du restaurant",
  },
  {
    title: "Pizzas Maison",
    description: "Nos pizzas artisanales cuites au feu de bois, avec une pâte maison.",
    image: "/homemade-italian-pizza.png",
    href: "/menu#pizzas",
    alt: "Pizza italienne maison cuite au feu de bois",
  },
  {
    title: "Desserts",
    description: "Terminez votre repas en douceur avec nos desserts maison.",
    image: "/french-chocolate-vanilla-dessert.png",
    href: "/menu#desserts",
    alt: "Dessert chocolat-vanille à la française",
  },
]

export default function FeaturedMenu() {
  return (
    <section className="py-16" aria-label="Catégories de la carte">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Notre Carte</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Découvrez notre sélection de plats traditionnels, salades composées, pizzas maison et desserts gourmands.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <motion.div key={cat.title} variants={fadeIn}>
                <Card className="h-full overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      quality={85}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-2">{cat.title}</h3>
                    <p className="text-gray-700 mb-4">{cat.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-navy text-navy hover:bg-navy/10 bg-transparent"
                    >
                      <Link
                        href={cat.href}
                        onClick={() => track("click_menu", { source: "featured", category: cat.title })}
                      >
                        Découvrir
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="text-center mt-12">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light">
              <Link href="/menu" onClick={() => track("click_menu", { source: "featured_full" })}>
                Voir toute notre carte
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
