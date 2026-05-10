"use client"

import { useEffect, useState } from "react"
import { getOpeningStatus, type OpeningStatus } from "@/lib/opening-status"
import { cn } from "@/lib/utils"

type Variant = "inline" | "pill"

export default function OpeningStatusBanner({
  variant = "inline",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const [status, setStatus] = useState<OpeningStatus | null>(null)

  useEffect(() => {
    const update = () => setStatus(getOpeningStatus())
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  if (!status) {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "inline-flex items-center gap-2 text-sm text-gray-500",
          variant === "pill" && "rounded-full border border-gray-200 px-3 py-1",
          className,
        )}
      >
        <span className="block h-2 w-2 rounded-full bg-gray-300" />
        <span>Chargement…</span>
      </div>
    )
  }

  const dotColor = status.isServing ? "bg-emerald-500" : status.isOpen ? "bg-amber-500" : "bg-red-500"
  const textColor = status.isServing
    ? "text-emerald-700"
    : status.isOpen
      ? "text-amber-700"
      : "text-red-700"

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-2 text-sm",
        variant === "pill" && "rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm px-3 py-1 shadow-sm",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("relative block h-2.5 w-2.5 rounded-full", dotColor)}>
        {status.isOpen && (
          <span className={cn("absolute inset-0 -m-0.5 rounded-full opacity-60 animate-ping", dotColor)} />
        )}
      </span>
      <span className={cn("font-medium", textColor)}>{status.label}</span>
      <span className="text-gray-500">·</span>
      <span className="text-gray-600">{status.detail}</span>
    </div>
  )
}
