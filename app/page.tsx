import dynamic from "next/dynamic"
import Hero from "@/components/home/hero"

const InfoCards = dynamic(() => import("@/components/home/info-cards"), {
  loading: () => <div className="py-16 bg-cream" aria-hidden />,
})
const FeaturedMenu = dynamic(() => import("@/components/home/featured-menu"), {
  loading: () => <div className="py-16" aria-hidden />,
})
const ReviewCTA = dynamic(() => import("@/components/home/review-cta"), {
  loading: () => <div className="py-16 bg-navy" aria-hidden />,
})

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
