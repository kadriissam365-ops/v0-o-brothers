"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Phone, Instagram } from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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
        staggerChildren: 0.2,
      },
    },
  }

  const card3D = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/terrasse1.webp"
            alt="Brother's restaurant Gennevilliers - Terrasse"
            fill
            priority
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-navy/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          {isLoaded && (
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
              <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                BROTHERS RESTAURANT
              </motion.h1>

              <motion.p variants={fadeIn} className="text-xl text-white/90 mb-8">
                L'endroit idéal pour se restaurer et se détendre. Une cuisine traditionnelle dans un cadre chaleureux au
                cœur de Gennevilliers
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <Button
                  size="lg"
                  className="bg-white text-navy hover:bg-white/90 font-semibold"
                  asChild
                >
                  <Link href="/commander">Commander en ligne</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/menu">Découvrir notre carte</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/menu-restaurant-pdf">Menu PDF</Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          {isLoaded && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={card3D}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Clock className="h-10 w-10 text-navy mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-playfair font-bold mb-2">Horaires</h3>
                    <p className="text-gray-600 mb-2">
                      <span className="font-medium">Ouverture:</span>
                      <br />
                      Lundi au Vendredi: 7h à 20h
                      <br />
                      Samedi: 8h à 20h
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Service restauration:</span>
                      <br />
                      Lundi au Samedi: 11h30 à 14h30
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={card3D}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <MapPin className="h-10 w-10 text-navy mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-playfair font-bold mb-2">Adresse</h3>
                    <p className="text-gray-600 mb-4">
                      148 avenue Gabriel Péri
                      <br />
                      92230 Gennevilliers
                    </p>
                    <p className="text-gray-600 text-sm">
                      PARKING Centre-Ville
                      <br />
                      2H GRATUITES*
                      <br />
                      *Ticket disponible chez votre commerçant
                      <br />
                      Entrée du parking: 21 av. Claude Debussy
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={card3D}
                whileHover={{
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Phone className="h-10 w-10 text-navy mb-4" />
                    </motion.div>
                    <h3 className="text-xl font-playfair font-bold mb-2">Contact</h3>
                    <p className="text-gray-600 mb-4">Téléphone: 01 47 90 25 72</p>
                    <div className="flex flex-col items-center">
                      <p className="text-gray-600 mb-2">Suivez-nous sur Instagram</p>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.instagram.com/brothersgenneviliers"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy hover:text-navy-light transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        @brothersgenneviliers
                        <br />
                        brothers92230
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoaded && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Notre Carte</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez notre sélection de plats traditionnels, salades composées, pizzas maison et desserts
                  gourmands.
                </p>
              </motion.div>

              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <motion.div variants={fadeIn}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src="/gourmet-caesar-salad.png"
                        alt="Salades Composées"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={90}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-bold mb-2">Salades Composées</h3>
                      <p className="text-gray-600 mb-4">
                        Nos salades fraîches et généreuses, préparées avec des ingrédients de qualité.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy/10 bg-transparent"
                      >
                        <Link href="/menu#salades">Découvrir</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src="/images/plats-traditionnels.png"
                        alt="Plats Traditionnels"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={90}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-bold mb-2">Plats Traditionnels</h3>
                      <p className="text-gray-600 mb-4">Des plats savoureux et généreux, préparés avec passion.</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy/10 bg-transparent"
                      >
                        <Link href="/menu#plats">Découvrir</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src="/homemade-italian-pizza.png"
                        alt="Pizzas Maison"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={90}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-bold mb-2">Pizzas Maison</h3>
                      <p className="text-gray-600 mb-4">
                        Nos pizzas artisanales cuites au feu de bois, avec une pâte maison.
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy/10 bg-transparent"
                      >
                        <Link href="/menu#pizzas">Découvrir</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full overflow-hidden group">
                    <div className="relative h-48">
                      <Image
                        src="/french-chocolate-vanilla-dessert.png"
                        alt="Desserts"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        quality={90}
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-bold mb-2">Desserts</h3>
                      <p className="text-gray-600 mb-4">Terminez votre repas en douceur avec nos desserts maison.</p>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-navy text-navy hover:bg-navy/10 bg-transparent"
                      >
                        <Link href="/menu#desserts">Découvrir</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center mt-12">
                <Button asChild size="lg" className="bg-navy hover:bg-navy-light">
                  <Link href="/menu">Voir toute notre carte</Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          {isLoaded && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                AVIS GOOGLE
              </motion.h2>

              <motion.p variants={fadeIn} className="text-white/90 max-w-2xl mx-auto mb-8">
                Nous serions ravis de connaître votre opinion sur votre expérience chez nous. Votre retour nous aide à
                nous améliorer !
              </motion.p>

              <motion.div variants={fadeIn}>
                <Button asChild size="lg" className="bg-cream text-navy hover:bg-cream/90">
                  <Link href="https://g.co/kgs/bFex6r3" target="_blank" rel="noopener noreferrer">
                    Laisser un avis
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
