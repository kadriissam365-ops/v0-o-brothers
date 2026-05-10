"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutPage() {
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

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">À propos</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez l&apos;histoire et les valeurs du Brother's restaurant Gennevilliers.
          </p>
        </div>

        {isLoaded && (
          <>
            {/* Notre histoire */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-playfair font-bold mb-6">Notre histoire</h2>
                  <p className="text-gray-600 mb-4">
                    Brother’s Restaurant Gennevilliers est né de l’amour commun d’un couple pour la gastronomie et l’art
                    de recevoir. Situé au cœur de Gennevilliers, notre établissement a ouvert ses portes en 2023 avec
                    l’ambition de créer un lieu convivial où se mêlent cuisine traditionnelle de qualité et atmosphère
                    chaleureuse.
                  </p>
                  <p className="text-gray-600">
                    Depuis son ouverture, Brother’s Restaurant a su séduire une clientèle variée, des habitants du
                    quartier aux professionnels en quête d’une pause gourmande. Notre secret ? Des produits frais, des
                    recettes authentiques et un service attentionné qui font de chaque visite un véritable moment de
                    plaisir et de partage.
                  </p>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/restaurant-exterior.webp"
                    alt="L'extérieur du restaurant Brother's restaurant Gennevilliers avec sa terrasse"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.section>

            {/* Nos valeurs */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-20"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-playfair font-bold mb-12 text-center">
                Nos valeurs
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Qualité</h3>
                  <p className="text-gray-600 text-center">
                    Nous nous engageons à utiliser des ingrédients frais et de première qualité pour vous offrir une
                    expérience gustative exceptionnelle.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h12M6 15h9M6 20h6M6 5h3"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Tradition</h3>
                  <p className="text-gray-600 text-center">
                    Nous perpétuons les recettes traditionnelles françaises tout en y ajoutant une touche de créativité
                    et de modernité.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="bg-navy/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-navy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">Convivialité</h3>
                  <p className="text-gray-600 text-center">
                    Nous mettons tout en œuvre pour vous offrir un accueil chaleureux et un service personnalisé, afin
                    que vous vous sentiez comme chez vous.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </>
        )}
      </div>
    </div>
  )
}
