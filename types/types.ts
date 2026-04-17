export type Sender = {
  name: string,
  speciality: string
}

export type Invitation = {
  title: string,
  sender: Sender,
  time: string
}

export type Day = {
  day: number
  isCurrent: boolean
  isToday: boolean
  isWeekend: boolean
}

export type Resource = {
  id: number
  title: string
  preview: string
  tags: string[]
}

export type TimeSlot = {
  id: number
  time: string
  available: boolean
}