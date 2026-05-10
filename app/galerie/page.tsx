"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Gallery data
const galleryData = {
  plats: [
    {
      id: "plat-1",
      title: "Salade César",
      description: "Notre salade César avec filet de poulet grillé",
      image: "/images/gallery/plats/salade-cesar.webp",
    },
    {
      id: "plat-2",
      title: "Entrecôte grillée",
      description: "Entrecôte grillée au sel de Guérande et piment d'Espelette",
      image: "/images/plats/entrecote.webp",
    },
    {
      id: "plat-3",
      title: "Burger BROTHER'S",
      description: "Notre burger signature avec frites maison",
      image: "/images/plats/burger-brothers.webp",
    },
    {
      id: "plat-4",
      title: "Tartare de bœuf",
      description: "Tartare de bœuf préparé à la minute",
      image: "/images/plats/tartare-boeuf.webp",
    },
    {
      id: "plat-5",
      title: "Pavé de saumon",
      description: "Pavé de saumon à la plancha, linguine au pesto",
      image: "/images/gallery/plats/pave-saumon.webp",
    },
    {
      id: "plat-6",
      title: "Bowl saumon",
      description: "Bowl healthy au saumon mariné et légumes frais",
      image: "/images/gallery/plats/bowl-saumon.webp",
    },
  ],
  pizzas: [
    {
      id: "pizza-1",
      title: "Pizza Margarita",
      description: "La classique avec sauce tomate et mozzarella",
      image: "/images/gallery/pizzas/margarita.webp",
    },
    {
      id: "pizza-2",
      title: "Pizza Régina",
      description: "Sauce tomate, mozzarella, champignons, jambon blanc",
      image: "/images/gallery/pizzas/regina.webp",
    },
    {
      id: "pizza-4",
      title: "Pizza Norvégienne",
      description: "Crème fraîche, mozzarella, saumon fumé",
      image: "/images/gallery/pizzas/norvegienne.webp",
    },
  ],
  desserts: [
    {
      id: "dessert-1",
      title: "Tiramisu maison",
      description: "Notre tiramisu fait maison",
      image: "/images/gallery/desserts/tiramisu.webp",
    },
    {
      id: "dessert-2",
      title: "Crème brûlée",
      description: "Crème brûlée traditionnelle",
      image: "/images/gallery/desserts/creme-brulee.webp",
    },
    {
      id: "dessert-3",
      title: "Mœlleux au chocolat",
      description: "Servi avec sa boule de glace vanille",
      image: "/images/gallery/desserts/moelleux-chocolat.webp",
    },
    {
      id: "dessert-4",
      title: "Café gourmand",
      description: "Café accompagné de ses mignardises du moment",
      image: "/images/gallery/desserts/cafe-gourmand.webp",
    },
  ],
  restaurant: [
    {
      id: "resto-1",
      title: "Notre salle",
      description: "L'intérieur chaleureux du O'Brothers avec son plafond étoilé",
      image: "/images/notre-salle-restaurant.webp",
    },
    {
      id: "resto-2",
      title: "Le bar",
      description: "Notre bar élégant où sont préparés vos cocktails",
      image: "/images/le-bar-restaurant.webp",
    },
    {
      id: "resto-3",
      title: "La terrasse",
      description: "Notre terrasse ensoleillée avec ses chaises en rotin",
      image: "/images/la-terrasse-restaurant.webp",
    },
    {
      id: "resto-4",
      title: "Espace lounge",
      description: "Notre espace lounge avec ses séparations en bois pour un moment de détente",
      image: "/images/espace-lounge-restaurant.webp",
    },
  ],
}

const renderGalleryTab = (
  items: typeof galleryData.plats,
  setSelectedImage: (img: any) => void,
  staggerContainer: any,
  fadeIn: any,
) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={staggerContainer}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {items.map((item) => (
      <motion.div
        key={item.id}
        variants={fadeIn}
      >
        <button
          className="cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 rounded-lg"
          onClick={() =>
            setSelectedImage({
              src: item.image,
              title: item.title,
              description: item.description,
            })
          }
          aria-label={`Agrandir : ${item.title} — ${item.description}`}
        >
          <div className="relative h-64 rounded-lg overflow-hidden group">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={`${item.title} — ${item.description}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300">{item.description}</p>
              </div>
            </div>
          </div>
        </button>
      </motion.div>
    ))}
  </motion.div>
)

export default function GalleryPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string
    title: string
    description: string
  }>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!selectedImage) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [selectedImage])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Galerie</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Découvrez en images notre restaurant, nos plats, nos pizzas et nos desserts.
          </p>
        </div>

        {isLoaded && (
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <Tabs defaultValue="pizzas" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                <TabsTrigger value="plats">Plats</TabsTrigger>
                <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
                <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
              </TabsList>

              <TabsContent value="plats">
                {renderGalleryTab(galleryData.plats, setSelectedImage, staggerContainer, fadeIn)}
              </TabsContent>

              <TabsContent value="pizzas">
                {renderGalleryTab(galleryData.pizzas, setSelectedImage, staggerContainer, fadeIn)}
              </TabsContent>

              <TabsContent value="desserts">
                {renderGalleryTab(galleryData.desserts, setSelectedImage, staggerContainer, fadeIn)}
              </TabsContent>

              <TabsContent value="restaurant">
                {renderGalleryTab(galleryData.restaurant, setSelectedImage, staggerContainer, fadeIn)}
              </TabsContent>
            </Tabs>

            {/* Lightbox */}
            {selectedImage && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`Image agrandie : ${selectedImage.title}`}
                className="fixed inset-0 bg-navy/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
                onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
              >
                <div
                  className="max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-[60vh]">
                    <Image
                      src={selectedImage.src || "/placeholder.svg"}
                      alt={`${selectedImage.title} — ${selectedImage.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 1024px"
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-playfair font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-700">{selectedImage.description}</p>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Fermer la vue agrandie"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
