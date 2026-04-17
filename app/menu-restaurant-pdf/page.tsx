"use client"

import Image from "next/image"

export default function MenuRestaurantPDF() {
  const menuImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.png-HJ4CXATWJM7m3mgx5Vyo5FwM6RgLU1.jpeg",
      alt: "Brother's Restaurant - Page de couverture",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ZJ39jYfDnxOSxLrSE5dAxEdNClGV0z.png",
      alt: "Menu Plat + Dessert",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-TSuqEKEmHB814rBPXXDtgRD0VRnU49.png",
      alt: "Salades Composées, Plats Traditionnels, Pizzas Maisons",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.png-3navgVfafofGF05gxPv24iNDzVRud8.jpeg",
      alt: "Apéritifs & Digestifs, Bières, Planches à partager",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-eBIuVfDE3zq7SBJ1lcB1jnLz2Uvfsl.png",
      alt: "Desserts, Coupes glacées, Glaces",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.png-pqI7G3EeoCcMxPzfyETgjkTCmW9mTM.jpeg",
      alt: "Desserts, Coupes glacées, Glaces, Happy Hour",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-8EEeVYc9UhEcFM5A506boUVyBfEbos.png",
      alt: "Boissons fraîches, Boissons chaudes, Cocktails, Mocktails",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-tynxpdD7ZFaLxUujQCxGwLpaqY9PhF.png",
      alt: "Vins supérieurs, Champagnes",
    },
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
