import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="text-8xl font-playfair font-bold text-navy mb-4">404</h1>
        <h2 className="text-2xl font-playfair font-semibold text-gray-800 mb-4">Page introuvable</h2>
        <p className="text-gray-700 max-w-md mx-auto mb-8">
          Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-navy hover:bg-navy-light">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
          <Button asChild variant="outline" className="border-navy text-navy hover:bg-navy/10 bg-transparent">
            <Link href="/menu">Voir notre carte</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
