"use client"

import HTMLFlipBookRaw from "react-pageflip"
import Image from "next/image"
import type { ComponentType } from "react"

const HTMLFlipBook = HTMLFlipBookRaw as unknown as ComponentType<Record<string, unknown>>

const menuImages = [
  "/menu-livre/page-1.jpeg",
  "/menu-livre/page-2.jpeg",
  "/menu-livre/page-4.jpeg",
  "/menu-livre/page-3.jpeg",
]

export default function MenuLivrePage() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center py-8 px-2 sm:px-4">
      <h1 className="text-2xl md:text-4xl font-playfair font-bold text-navy mb-6 text-center">Notre Menu Interactif</h1>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-4xl flex justify-center">
        <HTMLFlipBook
          width={300} // Réduit pour mobile
          height={425} // Réduit pour mobile
          size="stretch"
          minWidth={280}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="shadow-lg"
        >
          {menuImages.map((src, index) => (
            <div className="bg-white" key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Menu page ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  priority={index < 2}
                />
              </div>
            </div>
          ))}
        </HTMLFlipBook>
      </div>
      <p className="text-navy mt-6 text-base text-center px-4">
        Cliquez sur les coins pour tourner les pages, ou glissez sur mobile.
      </p>
    </div>
  )
}
