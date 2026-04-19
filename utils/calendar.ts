import type { Day } from "~/types/types"

export const calendarDays = () => {
  const year = 2023
  const month = 11
  const today = 13

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prevDaysCount = firstDay === 0 ? 6 : firstDay - 1
  const prevMonthDays = new Date(year, month, 0).getDate()

  const prevDays: Day[] = Array.from({ length: prevDaysCount }, (_, index) => {
    const day = prevMonthDays - prevDaysCount + 1 + index
    const date = new Date(year, month - 1, day)
    const weekDay = date.getDay()

    return {
      day,
      isCurrent: false,
      isToday: false,
      isWeekend: weekDay === 0 || weekDay === 6,
    }
  })

  const currentDays: Day[] = Array.from({ length: daysInMonth }, (_, index) => {
    const day = index + 1
    const date = new Date(year, month, day)
    const weekDay = date.getDay()

    return {
      day,
      isCurrent: true,
      isToday: day === today,
      isWeekend: weekDay === 0 || weekDay === 6,
    }
  })

  const filledCount = prevDays.length + currentDays.length
  const nextDaysCount = 42 - filledCount

  const nextDays: Day[] = Array.from({ length: nextDaysCount }, (_, index) => {
    const day = index + 1
    const date = new Date(year, month + 1, day)
    const weekDay = date.getDay()

    return {
      day,
      isCurrent: false,
      isToday: false,
      isWeekend: weekDay === 0 || weekDay === 6,
    }
  })

  return [...prevDays, ...currentDays, ...nextDays]
}