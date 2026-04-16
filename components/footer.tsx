import Link from "next/link"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image src="/brothers-logo.png" alt="O'Brothers Logo" width={150} height={80} className="h-auto" />
            </div>
            <p className="text-gray-300 mb-2">Brother's restaurant Gennevilliers</p>
            <p className="text-gray-300 mb-4">
              148 avenue Gabriel Péri
              <br />
              92230 Gennevilliers
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Téléphone:</span> 01 47 90 25 72
            </p>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Horaires</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold">Ouverture:</span>
              <br />
              Lundi au Vendredi: 7h à 20h
              <br />
              Samedi: 8h à 20h
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Service restauration:</span>
              <br />
              Lundi au Samedi: 11h30 à 14h30
            </p>
          </div>

          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/brothersgenneviliers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cream transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold">Instagram:</span>
              <br />
              @brothersgenneviliers
              <br />
              brothers92230
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 md:mr-4">
              &copy; {new Date().getFullYear()} Brother's restaurant Gennevilliers. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Site créé par{" "}
              <a
                href="https://www.kadriwebai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                  KADRI Web AI
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
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
