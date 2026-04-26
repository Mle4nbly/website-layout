import type { TimeSlot } from "~/types/types"

export const generateTimeSlots = (start = 8, end = 20) => {
  const slots: TimeSlot[] = []

  for (let i = start; i < end; i++) {
    const from = String(i).padStart(2, '0')
    const to = String(i + 1).padStart(2, '0')
    slots.push({
      time: `${from}:00 - ${to}:00`,
      available: false
    })
  }

  return slots
}