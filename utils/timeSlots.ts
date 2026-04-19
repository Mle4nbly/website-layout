export const generateTimeSlots = (start = 8, end = 20) => {
  const slots: string[] = []

  for (let i = start; i < end; i++) {
    const from = String(i).padStart(2, '0')
    const to = String(i + 1).padStart(2, '0')
    slots.push(`${from}:00 - ${to}:00`)
  }

  return slots
}