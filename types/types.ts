export type ReservationModalProps = {
  responsibles: string[],
  timeSlots: TimeSlot[]
}

export type Specialist = {
  name: string,
  avatar: string,
  description: string,
  speciality: string
}

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
  time: string
  available: boolean
}