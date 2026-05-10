import type { Metadata } from "next"
import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RESTAURANT } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Découvrez les avis de nos clients sur Brother's Restaurant à Gennevilliers. Cuisine traditionnelle, pizzas maison, accueil chaleureux.",
  alternates: { canonical: "/avis" },
  openGraph: {
    title: "Avis clients — Brother's Restaurant Gennevilliers",
    description: "Les retours de nos clients sur leur expérience au Brother's Restaurant.",
    url: "/avis",
  },
}

type Testimonial = {
  author: string
  rating: number
  date: string
  body: string
}

const testimonials: Testimonial[] = [
  {
    author: "Sarah M.",
    rating: 5,
    date: "2026-04-12",
    body:
      "Cadre chaleureux et cuisine généreuse. La salade Brother's au saumon est un délice et le service est aux petits soins.",
  },
  {
    author: "Karim B.",
    rating: 5,
    date: "2026-03-30",
    body:
      "Pizza norvégienne au top, pâte fine cuite au feu de bois. Bonne adresse familiale à Gennevilliers, on revient !",
  },
  {
    author: "Hélène R.",
    rating: 4,
    date: "2026-03-15",
    body:
      "Très bon accueil, terrasse agréable aux beaux jours. Le tartare est préparé à la minute, on sent la qualité.",
  },
  {
    author: "Marc D.",
    rating: 5,
    date: "2026-02-22",
    body:
      "Coup de cœur pour le Café Gourmand et l'ambiance lounge en fin de service. Bon rapport qualité/prix.",
  },
]

const aggregateRating = {
  value:
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
  count: testimonials.length,
}

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${RESTAURANT.website}#restaurant`,
  name: RESTAURANT.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: aggregateRating.value.toFixed(1),
    reviewCount: aggregateRating.count,
    bestRating: "5",
    worstRating: "1",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.author },
    datePublished: t.date,
    reviewBody: t.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: "5",
      worstRating: "1",
    },
  })),
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} étoiles sur 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function AvisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Avis clients</h1>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Stars rating={Math.round(aggregateRating.value)} />
              <span className="text-lg font-semibold text-gray-800">
                {aggregateRating.value.toFixed(1)} / 5
              </span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-700">{aggregateRating.count} avis sélectionnés</span>
            </div>
            <p className="text-gray-700">
              Les retours de nos clients comptent énormément. Voici une sélection des avis publiés sur Google. Pour
              consulter l'ensemble des avis ou laisser le vôtre, rendez-vous sur notre fiche Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {testimonials.map((t) => (
              <Card key={`${t.author}-${t.date}`} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-gray-900">{t.author}</p>
                    <Stars rating={t.rating} />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-3">« {t.body} »</p>
                  <time dateTime={t.date} className="text-xs text-gray-500">
                    {new Date(t.date).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto bg-cream rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-3">
              Vous avez aimé votre venue ?
            </h2>
            <p className="text-gray-700 mb-6">
              Partagez votre expérience pour aider d'autres clients à découvrir le Brother's.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-navy hover:bg-navy-light">
                <Link href={RESTAURANT.googleReview} target="_blank" rel="noopener noreferrer">
                  Laisser un avis Google <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy text-navy">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
