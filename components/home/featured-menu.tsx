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
    description: "Mozzarella, jambon de Parme, melon, pesto et roquette : nos salades fraîches et généreuses.",
    image: "/images/insta/plats/salade-italienne.webp",
    href: "/menu#salades",
    alt: "Salade italienne mozzarella, jambon de Parme, melon et roquette",
  },
  {
    title: "Plats Traditionnels",
    description: "Bœuf bourguignon, côte de bœuf, poulet basquaise : des plats mijotés avec passion.",
    image: "/images/insta/plats/boeuf-bourguignon.webp",
    href: "/menu#plats",
    alt: "Bœuf bourguignon mijoté au vin rouge, carottes et pommes de terre",
  },
  {
    title: "Pizzas Maison",
    description: "Burrata, Regina, chèvre… nos pizzas artisanales à pâte fine et garnitures généreuses.",
    image: "/images/insta/pizzas/burrata-roquette.webp",
    href: "/menu#pizzas",
    alt: "Pizza burrata, roquette, tomates cerises et parmesan",
  },
  {
    title: "Desserts",
    description: "Tartes aux fruits, charlottes, cheesecakes : nos desserts maison pour finir en douceur.",
    image: "/images/insta/desserts/tarte-fraise.webp",
    href: "/menu#desserts",
    alt: "Tarte à la fraise sur pâte sablée et crème pâtissière vanille",
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
