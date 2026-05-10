"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import OpeningStatusBanner from "@/components/opening-status-banner"
import { RESTAURANT } from "@/lib/constants"
import { track } from "@/lib/track"

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
  const pathname = usePathname()
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-1" : "bg-transparent py-3",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-md">
          <div className="flex items-center">
            <Image src="/brothers-logo.png" alt="O'Brothers Logo" width={100} height={64} className="h-auto" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Navigation principale">
          <OpeningStatusBanner variant="pill" />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors rounded-md px-1",
                isActive(link.href) ? "text-navy underline underline-offset-4" : "text-gray-700 hover:text-navy",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-navy hover:bg-navy-light p-3">
            <Link
              href={`tel:${RESTAURANT.phone.tel}`}
              aria-label={`Appeler le restaurant au ${RESTAURANT.phone.display}`}
              onClick={() => track("click_call", { source: "navbar_desktop" })}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-6 w-6 text-navy" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 pt-20 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation"
            >
              <button
                className="absolute top-6 right-4 z-50 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded-md"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-6 w-6 text-navy" aria-hidden="true" />
              </button>

              <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6 bg-white/95 rounded-lg shadow-lg" aria-label="Navigation mobile">
                <OpeningStatusBanner variant="pill" className="self-start" />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "text-lg font-medium transition-colors rounded-md",
                      isActive(link.href) ? "text-navy underline underline-offset-4" : "text-gray-800 hover:text-navy",
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="bg-navy hover:bg-navy-light w-full">
                  <Link
                    href={`tel:${RESTAURANT.phone.tel}`}
                    onClick={() => {
                      track("click_call", { source: "navbar_mobile" })
                      setIsOpen(false)
                    }}
                    className="flex items-center justify-center gap-2"
                    aria-label={`Appeler le ${RESTAURANT.phone.display}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Appeler {RESTAURANT.phone.display}
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
