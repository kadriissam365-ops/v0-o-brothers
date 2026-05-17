"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import { RESTAURANT } from "@/lib/constants"
import { track } from "@/lib/track"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/brothers-logo.png" alt="O'Brothers Logo" width={150} height={80} className="h-auto" />
            </div>
            <p className="text-gray-300 mb-2">{RESTAURANT.name}</p>
            <p className="text-gray-300 mb-4">
              {RESTAURANT.address.street}
              <br />
              {RESTAURANT.address.city}
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Téléphone :</span>{" "}
              <a
                href={`tel:${RESTAURANT.phone.tel}`}
                onClick={() => track("click_call", { source: "footer" })}
                className="hover:text-white transition-colors"
              >
                {RESTAURANT.phone.display}
              </a>
            </p>
            <a
              href={RESTAURANT.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("click_whatsapp", { source: "footer" })}
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm">Discuter sur WhatsApp</span>
            </a>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Horaires</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Ouverture :</span>
              <br />
              {RESTAURANT.hours.opening.weekdays}
              <br />
              {RESTAURANT.hours.opening.saturday}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Service restauration :</span>
              <br />
              {RESTAURANT.hours.service}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-4">
              {RESTAURANT.instagram.map((ig) => (
                <a
                  key={ig.handle}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("click_instagram", { source: "footer", handle: ig.handle })}
                  className="text-white hover:text-cream transition-colors"
                  aria-label={`Instagram ${ig.handle}`}
                >
                  <Instagram className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-gray-300">
              <span className="font-semibold">Instagram :</span>
              <br />
              {RESTAURANT.instagram.map((ig) => (
                <span key={ig.handle} className="block">{ig.handle}</span>
              ))}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 md:mr-4">
              &copy; {new Date().getFullYear()} {RESTAURANT.name}. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Site créé par{" "}
              <a
                href="https://kadriai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                KADRI AI
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/avis" className="text-gray-400 text-sm hover:text-white transition-colors">
              Avis clients
            </Link>
            <Link href="/mentions-legales" className="text-gray-400 text-sm hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
