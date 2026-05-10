"use client"

import { Phone, MapPin, MessageCircle } from "lucide-react"
import { RESTAURANT } from "@/lib/constants"
import { track } from "@/lib/track"
import { cn } from "@/lib/utils"

export default function MobileCTABar() {
  return (
    <div
      className={cn(
        "md:hidden fixed bottom-0 inset-x-0 z-40",
        "bg-white/95 backdrop-blur-md border-t border-gray-200",
        "pb-[env(safe-area-inset-bottom)]",
        "shadow-[0_-4px_12px_rgba(0,0,0,0.06)]",
      )}
      role="navigation"
      aria-label="Actions rapides"
    >
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href={`tel:${RESTAURANT.phone.tel}`}
          onClick={() => track("click_call", { source: "mobile_cta" })}
          className="flex flex-col items-center justify-center py-3 gap-1 text-navy hover:bg-navy/5 active:bg-navy/10 transition-colors"
          aria-label={`Appeler le restaurant au ${RESTAURANT.phone.display}`}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-medium">Appeler</span>
        </a>
        <a
          href={RESTAURANT.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_whatsapp", { source: "mobile_cta" })}
          className="flex flex-col items-center justify-center py-3 gap-1 text-emerald-700 hover:bg-emerald-500/5 active:bg-emerald-500/10 transition-colors"
          aria-label="Contacter via WhatsApp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <a
          href={RESTAURANT.itinerary}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_itinerary", { source: "mobile_cta" })}
          className="flex flex-col items-center justify-center py-3 gap-1 text-navy hover:bg-navy/5 active:bg-navy/10 transition-colors"
          aria-label="Itinéraire vers le restaurant"
        >
          <MapPin className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-medium">Itinéraire</span>
        </a>
      </div>
    </div>
  )
}
