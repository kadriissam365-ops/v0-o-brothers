"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { RESTAURANT } from "@/lib/constants"
import { track } from "@/lib/track"

export default function ReviewCTA() {
  return (
    <section className="py-16 bg-navy text-white" aria-label="Laisser un avis Google">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Avis Google
          </motion.h2>

          <motion.p variants={fadeIn} className="text-white/90 max-w-2xl mx-auto mb-8">
            Nous serions ravis de connaître votre opinion sur votre expérience chez nous. Votre retour nous aide à nous
            améliorer !
          </motion.p>

          <motion.div variants={fadeIn}>
            <Button asChild size="lg" className="bg-cream text-navy hover:bg-cream/90">
              <Link
                href={RESTAURANT.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_review", { source: "home_cta" })}
              >
                Laisser un avis
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
