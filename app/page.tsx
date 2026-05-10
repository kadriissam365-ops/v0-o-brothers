import Hero from "@/components/home/hero"
import InfoCards from "@/components/home/info-cards"
import FeaturedMenu from "@/components/home/featured-menu"
import ReviewCTA from "@/components/home/review-cta"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <InfoCards />
      <FeaturedMenu />
      <ReviewCTA />
    </div>
  )
}
