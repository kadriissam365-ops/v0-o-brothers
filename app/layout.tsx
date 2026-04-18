import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Brother's Restaurant Gennevilliers — Cuisine traditionnelle",
    template: "%s | Brother's Restaurant Gennevilliers",
  },
  description:
    "Brother's Restaurant Gennevilliers — Cuisine traditionnelle, pizzas maison, salades et desserts. Commandez à emporter ou venez nous rendre visite au 148 avenue Gabriel Péri, 92230 Gennevilliers.",
  keywords: ["restaurant Gennevilliers", "cuisine traditionnelle", "pizza", "burger", "tartare", "Brother's restaurant"],
  metadataBase: new URL("https://www.brothers-restaurant-gennevilliers.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.brothers-restaurant-gennevilliers.com",
    siteName: "Brother's Restaurant Gennevilliers",
    title: "Brother's Restaurant Gennevilliers — Cuisine traditionnelle",
    description:
      "Cuisine traditionnelle, pizzas maison, salades et desserts au cœur de Gennevilliers. Ouvert du lundi au samedi.",
    images: [{ url: "/terrasse1.webp", width: 1920, height: 1440, alt: "Terrasse du Brother's Restaurant" }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Brother's Restaurant Gennevilliers",
  url: "https://www.brothers-restaurant-gennevilliers.com",
  telephone: "+33147902572",
  email: "contact@brothers-restaurant-gennevilliers.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "148 avenue Gabriel Péri",
    addressLocality: "Gennevilliers",
    postalCode: "92230",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9219,
    longitude: 2.2997,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  servesCuisine: ["Française", "Pizza", "Burger"],
  priceRange: "€€",
  image: "https://www.brothers-restaurant-gennevilliers.com/terrasse1.webp",
  sameAs: [
    "https://www.instagram.com/brothersgenneviliers",
    "https://www.instagram.com/brothers92230",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
