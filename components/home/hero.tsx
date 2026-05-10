"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import OpeningStatusBanner from "@/components/opening-status-banner"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { track } from "@/lib/track"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center" aria-label="Présentation Brother's Restaurant">
      <div className="absolute inset-0 z-0">
        <Image
          src="/terrasse1.webp"
          alt="Terrasse du Brother's Restaurant à Gennevilliers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-navy/50" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
          <motion.div variants={fadeIn} className="flex justify-center mb-6">
            <OpeningStatusBanner variant="pill" className="bg-white/95" />
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            BROTHER'S RESTAURANT
          </motion.h1>

          <motion.p variants={fadeIn} className="text-xl text-white/90 mb-8">
            L'endroit idéal pour se restaurer et se détendre. Une cuisine traditionnelle dans un cadre chaleureux au
            cœur de Gennevilliers.
          </motion.p>

          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-navy hover:bg-white/90 font-semibold" asChild>
              <Link href="/menu" onClick={() => track("click_menu", { source: "hero" })}>
                Découvrir notre carte
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
              asChild
            >
              <Link href="/menu-restaurant-pdf" onClick={() => track("click_menu", { source: "hero_pdf" })}>
                Menu PDF
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
