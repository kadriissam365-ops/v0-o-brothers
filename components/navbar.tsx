"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Menu", href: "/menu" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-1" : "bg-transparent py-3",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <Image src="/brothers-logo.png" alt="O'Brothers Logo" width={100} height={64} className="h-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-navy transition-colors">
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-navy hover:bg-navy-light p-3">
            <Link href="tel:+33147902572" aria-label="Appeler le restaurant">
              <Phone className="h-5 w-5" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="h-6 w-6 text-navy" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 pt-20"
            >
              {/* Close button - positioned absolutely in top right */}
              <button
                className="absolute top-6 right-4 z-50 p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6 text-navy" />
              </button>

              <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6 bg-white/95 rounded-lg shadow-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-navy transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="bg-navy hover:bg-navy-light w-full">
                  <Link
                    href="tel:+33147902572"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Appeler
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
