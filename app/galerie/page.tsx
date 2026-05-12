"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Gallery data — photos issues du compte Instagram @brothersgenneviliers
const galleryData = {
  plats: [
    { id: "plat-cote-de-boeuf", title: "Côte de bœuf", description: "Côte de bœuf grillée, sauce aux champignons et pommes de terre grenailles", image: "/images/insta/plats/cote-de-boeuf.webp" },
    { id: "plat-boeuf-bourguignon", title: "Bœuf bourguignon", description: "Bœuf mijoté longuement au vin rouge, carottes et pommes de terre", image: "/images/insta/plats/boeuf-bourguignon.webp" },
    { id: "plat-gambas-risotto", title: "Gambas et risotto", description: "Risotto crémeux aux gambas grillées et fines herbes", image: "/images/insta/plats/gambas-risotto.webp" },
    { id: "plat-poulet-basquaise", title: "Poulet basquaise", description: "Cuisses de poulet rôties aux poivrons, oignons et penne", image: "/images/insta/plats/poulet-basquaise.webp" },
    { id: "plat-brochettes-tandoori", title: "Brochettes de poulet tandoori", description: "Brochettes marinées tandoori, frites maison et salade", image: "/images/insta/plats/brochettes-tandoori.webp" },
    { id: "plat-poulet-farci-cepes", title: "Poulet farci aux cèpes", description: "Suprême de poulet farci sauce aux cèpes, riz pilaf", image: "/images/insta/plats/poulet-farci-cepes.webp" },
    { id: "plat-burger-saumon-duo", title: "Burger et saumon", description: "Notre burger maison et pavé de saumon à la plancha", image: "/images/insta/plats/burger-saumon-duo.webp" },
    { id: "plat-salade-italienne", title: "Salade italienne", description: "Mozzarella, jambon de Parme, melon, pesto et roquette", image: "/images/insta/plats/salade-italienne.webp" },
    { id: "plat-bowl-avocat", title: "Bowl healthy", description: "Bowl d'avocat, edamame, tomates cerises et riz complet", image: "/images/insta/plats/bowl-avocat.webp" },
    { id: "plat-raviolis-fromages", title: "Raviolis 4 fromages", description: "Raviolis crémeux aux 4 fromages et tomates séchées", image: "/images/insta/plats/raviolis-fromages.webp" },
    { id: "plat-pennes-pesto", title: "Pennes au pesto", description: "Pennes maison sauce pesto, tomates confites et parmesan", image: "/images/insta/plats/pennes-pesto.webp" },
  ],
  pizzas: [
    { id: "pizza-burrata-roquette", title: "Pizza burrata et roquette", description: "Burrata crémeuse, roquette fraîche, tomates cerises et parmesan", image: "/images/insta/pizzas/burrata-roquette.webp" },
    { id: "pizza-regina", title: "Pizza Regina", description: "Sauce tomate, mozzarella, jambon blanc et champignons frais", image: "/images/insta/pizzas/regina.webp" },
    { id: "pizza-regine", title: "Pizza Régine", description: "Notre Régine généreusement garnie", image: "/images/insta/pizzas/regine.webp" },
    { id: "pizza-chevre", title: "Pizza chèvre", description: "Sauce tomate, mozzarella, médaillons de chèvre fondants", image: "/images/insta/pizzas/chevre.webp" },
    { id: "pizza-du-chez", title: "Pizza du Chef", description: "Bœuf haché, olives, oignons, la signature du chef", image: "/images/insta/pizzas/du-chez.webp" },
  ],
  desserts: [
    { id: "dessert-charlotte-fraises", title: "Charlotte aux fraises", description: "Charlotte à la fraise, mousse vanille et boudoirs maison", image: "/images/insta/desserts/charlotte-fraises.webp" },
    { id: "dessert-tarte-figue", title: "Tarte à la figue fraîche", description: "Tarte aux figues fraîches sur sablé Breton", image: "/images/insta/desserts/tarte-figue.webp" },
    { id: "dessert-tarte-fraise", title: "Tarte à la fraise", description: "Pâte sablée, crème pâtissière vanille et fraises fraîches", image: "/images/insta/desserts/tarte-fraise.webp" },
    { id: "dessert-tarte-citron-meringuee", title: "Tarte au citron meringuée", description: "Crème au citron acidulée, meringue italienne dorée", image: "/images/insta/desserts/tarte-citron-meringuee.webp" },
    { id: "dessert-tarte-abricot", title: "Tarte aux abricots", description: "Tarte aux abricots et amandes effilées", image: "/images/insta/desserts/tarte-abricot.webp" },
    { id: "dessert-charlotte-chocolat", title: "Charlotte au chocolat", description: "Charlotte au chocolat noir, ganache et boudoirs", image: "/images/insta/desserts/charlotte-chocolat.webp" },
    { id: "dessert-bavarois-fraises", title: "Bavarois aux fraises", description: "Bavarois fraises sur biscuit sablé, miroir fruits rouges", image: "/images/insta/desserts/bavarois-fraises.webp" },
    { id: "dessert-millefeuille", title: "Millefeuille maison", description: "Millefeuille à la vanille, pâte feuilletée et glaçage", image: "/images/insta/desserts/millefeuille.webp" },
    { id: "dessert-cheesecake-newyork", title: "Cheesecake new-yorkais", description: "Cheesecake à l'américaine, biscuit speculoos", image: "/images/insta/desserts/cheesecake-new-yorkais.webp" },
    { id: "dessert-cheesecake-maison", title: "Cheesecake maison", description: "Cheesecake aérien, croûte de biscuits émiettés", image: "/images/insta/desserts/cheesecake-maison.webp" },
    { id: "dessert-gateau-poire-chocolat", title: "Gâteau poire et chocolat", description: "Gâteau moelleux, poires fondantes et ganache au chocolat", image: "/images/insta/desserts/gateau-poire-chocolat.webp" },
  ],
  restaurant: [
    { id: "resto-interieur-tables", title: "Notre salle", description: "L'intérieur chaleureux du Brother's avec ses tables et claustras bois", image: "/images/insta/restaurant/interieur-tables.webp" },
    { id: "resto-bar-consommations", title: "Le bar", description: "Notre bar avec sa sélection de spiritueux et son tableau de consommations", image: "/images/insta/restaurant/bar-consommations.webp" },
    { id: "resto-terrasse-rotin", title: "La terrasse", description: "Notre terrasse extérieure avec chaises rotin et guirlande lumineuse", image: "/images/insta/restaurant/terrasse-rotin.webp" },
    { id: "resto-salle-table", title: "Tables dressées", description: "Tables prêtes à accueillir nos clients dans une ambiance soignée", image: "/images/insta/restaurant/salle-table.webp" },
    { id: "resto-cocktail-bar", title: "Cocktail signature", description: "Cocktail tropical maison servi au bar en marbre vert", image: "/images/insta/restaurant/cocktail-bar.webp" },
    { id: "resto-equipe-lions-club", title: "Notre équipe", description: "L'équipe du Brother's lors d'un événement Lions Club", image: "/images/insta/restaurant/equipe-lions-club.webp" },
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
