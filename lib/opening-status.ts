import { RESTAURANT } from "./constants"

type Slot = { days: number[]; open: string; close: string }

function timeToMinutes(t: string) {
  const [h, m] = t.split(":").map(Number)
  return h * 60 + m
}

function findActiveSlot(slots: Slot[], now: Date): Slot | null {
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()
  return (
    slots.find(
      (s) => s.days.includes(day) && minutes >= timeToMinutes(s.open) && minutes < timeToMinutes(s.close),
    ) ?? null
  )
}

function findNextSlot(slots: Slot[], now: Date): { slot: Slot; daysAhead: number } | null {
  const day = now.getDay()
  const minutes = now.getHours() * 60 + now.getMinutes()

  for (let offset = 0; offset < 7; offset++) {
    const target = (day + offset) % 7
    const candidates = slots.filter((s) => s.days.includes(target))
    for (const slot of candidates) {
      if (offset === 0 && minutes >= timeToMinutes(slot.open)) continue
      return { slot, daysAhead: offset }
    }
  }
  return null
}

export type OpeningStatus = {
  isOpen: boolean
  isServing: boolean
  label: string
  detail: string
}

export function getOpeningStatus(now: Date = new Date()): OpeningStatus {
  const openingSlot = findActiveSlot(RESTAURANT.hoursStructured.opening, now)
  const serviceSlot = findActiveSlot(RESTAURANT.hoursStructured.service, now)
  const isOpen = openingSlot !== null
  const isServing = serviceSlot !== null

  if (isServing && serviceSlot) {
    return {
      isOpen: true,
      isServing: true,
      label: "Service en cours",
      detail: `Cuisine ouverte jusqu'à ${serviceSlot.close.replace(":", "h")}`,
    }
  }

  if (isOpen && openingSlot) {
    const nextService = findNextSlot(RESTAURANT.hoursStructured.service, now)
    const nextLabel =
      nextService && nextService.daysAhead === 0
        ? `Service à ${nextService.slot.open.replace(":", "h")}`
        : `Ouvert jusqu'à ${openingSlot.close.replace(":", "h")}`
    return {
      isOpen: true,
      isServing: false,
      label: "Ouvert maintenant",
      detail: nextLabel,
    }
  }

  const nextOpening = findNextSlot(RESTAURANT.hoursStructured.opening, now)
  if (!nextOpening) {
    return { isOpen: false, isServing: false, label: "Fermé", detail: "Consultez nos horaires" }
  }

  const dayNames = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
  const nextDayIndex = nextOpening.slot.days.find((d) => {
    const today = now.getDay()
    return ((d - today + 7) % 7) === nextOpening.daysAhead
  })
  const detail =
    nextOpening.daysAhead === 0
      ? `Réouvre à ${nextOpening.slot.open.replace(":", "h")}`
      : nextOpening.daysAhead === 1
        ? `Réouvre demain à ${nextOpening.slot.open.replace(":", "h")}`
        : `Réouvre ${dayNames[nextDayIndex ?? 0]} à ${nextOpening.slot.open.replace(":", "h")}`

  return { isOpen: false, isServing: false, label: "Fermé", detail }
}
