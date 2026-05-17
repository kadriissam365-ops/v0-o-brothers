"use client"

import Image from "next/image"

export default function MenuRestaurantPDF() {
  const menuImages = [
    { src: "/menu-restaurant-pdf/page-1.webp", alt: "Brother's Restaurant - Page de couverture" },
    { src: "/menu-restaurant-pdf/page-2.webp", alt: "Menu Plat + Dessert" },
    { src: "/menu-restaurant-pdf/page-3.webp", alt: "Salades Composées, Plats Traditionnels, Pizzas Maisons" },
    { src: "/menu-restaurant-pdf/page-4.webp", alt: "Apéritifs & Digestifs, Bières, Planches à partager" },
    { src: "/menu-restaurant-pdf/page-5.webp", alt: "Desserts, Coupes glacées, Glaces" },
    { src: "/menu-restaurant-pdf/page-6.webp", alt: "Desserts, Coupes glacées, Glaces, Happy Hour" },
    { src: "/menu-restaurant-pdf/page-7.webp", alt: "Boissons fraîches, Boissons chaudes, Cocktails, Mocktails" },
    { src: "/menu-restaurant-pdf/page-8.webp", alt: "Vins supérieurs, Champagnes" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 print:p-0 print:max-w-none">
        <div className="space-y-4 print:space-y-0">
          {menuImages.map((image, index) => (
            <div key={index} className="bg-white shadow-lg print:shadow-none print:break-inside-avoid">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={1200}
                height={1600}
                className="w-full h-auto"
                quality={100}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
