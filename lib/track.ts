"use client"

import { track as vercelTrack } from "@vercel/analytics"

export type TrackEvent =
  | "click_call"
  | "click_whatsapp"
  | "click_itinerary"
  | "click_instagram"
  | "click_menu"
  | "click_order"
  | "click_review"

export function track(event: TrackEvent, props?: Record<string, string | number | boolean>) {
  try {
    vercelTrack(event, props)
  } catch {
    // analytics may be blocked or not yet loaded — fail silently
  }
}
