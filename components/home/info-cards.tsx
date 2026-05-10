"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Phone, Instagram } from "lucide-react"
import { RESTAURANT } from "@/lib/constants"
import { card3D, staggerContainer } from "@/lib/animations"
import { track } from "@/lib/track"

function HoverCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={card3D}
      whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center">{children}</CardContent>
      </Card>
    </motion.div>
  )
}

export default function InfoCards() {
  return (
    <section className="py-16 bg-cream" aria-label="Informations pratiques">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <HoverCard>
            <Clock className="h-10 w-10 text-navy mb-4" aria-hidden="true" />
            <h2 className="text-xl font-playfair font-bold mb-2">Horaires</h2>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Ouverture :</span>
              <br />
              {RESTAURANT.hours.opening.weekdays}
              <br />
              {RESTAURANT.hours.opening.saturday}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Service restauration :</span>
              <br />
              {RESTAURANT.hours.service}
            </p>
          </HoverCard>

          <HoverCard>
            <MapPin className="h-10 w-10 text-navy mb-4" aria-hidden="true" />
            <h2 className="text-xl font-playfair font-bold mb-2">Adresse</h2>
            <p className="text-gray-700 mb-4">
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.city}
            </p>
            <p className="text-gray-700 text-sm mb-4">
              {RESTAURANT.parking.label}
              <br />
              {RESTAURANT.parking.note}
              <br />
              {RESTAURANT.parking.entrance}
            </p>
            <a
              href={RESTAURANT.itinerary}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_itinerary", { source: "info_card" })}
              className="text-sm font-semibold text-navy underline-offset-2 hover:underline"
            >
              Itinéraire Google Maps →
            </a>
          </HoverCard>

          <HoverCard>
            <Phone className="h-10 w-10 text-navy mb-4" aria-hidden="true" />
            <h2 className="text-xl font-playfair font-bold mb-2">Contact</h2>
            <p className="text-gray-700 mb-4">
              Téléphone :{" "}
              <a
                href={`tel:${RESTAURANT.phone.tel}`}
                onClick={() => track("click_call", { source: "info_card" })}
                className="hover:text-navy transition-colors font-medium underline-offset-2 hover:underline"
              >
                {RESTAURANT.phone.display}
              </a>
            </p>
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-2">Suivez-nous sur Instagram</p>
              <div className="flex space-x-4">
                {RESTAURANT.instagram.map((ig) => (
                  <a
                    key={ig.handle}
                    href={ig.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("click_instagram", { source: "info_card", handle: ig.handle })}
                    className="text-navy hover:text-navy-light transition-colors"
                    aria-label={`Instagram ${ig.handle}`}
                  >
                    <Instagram className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-gray-700 text-sm mt-2">
                {RESTAURANT.instagram.map((ig) => (
                  <span key={ig.handle} className="block">{ig.handle}</span>
                ))}
              </p>
            </div>
          </HoverCard>
        </motion.div>
      </div>
    </section>
  )
}
