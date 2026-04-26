import type { Resource, Specialist, TimeSlot } from "~/types/types";

export const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const reservationTimeSlots: TimeSlot[] = [
  { time: '08.00 - 09.00', available: false },
  { time: '09.00 - 10.00', available: false },
  { time: '10.00 - 11.00', available: true },
  { time: '11.00 - 12.00', available: true },
  { time: '12.00 - 13.00', available: false },
  { time: '13.00 - 14.00', available: true },
  { time: '14.00 - 15.00', available: false },
  { time: '15.00 - 16.00', available: false },
  { time: '16.00 - 17.00', available: false },
  { time: '17.00 - 18.00', available: false },
  { time: '18.00 - 19.00', available: false },
  { time: '19.00 - 20.00', available: false }
]

export const resources: Resource[] = [
  {
    id: 1,
    title: "Коворкинг ИРНИТУ",
    preview: "/website-layout/images/coworking-room-preview.png",
    tags: ["Фото", "Информация"]
  },
  {
    id: 2,
    title: "Переговорная ИРНИТУ",
    preview: "/website-layout/images/meeting-room-preview.png",
    tags: ["Фото", "Информация"]
  }
]

export const responsibles = [
  'Иван Иванов',
  'Елена Иванова'
]

export const specialists: Specialist[] = [
  {
    name: 'Иван Иванов',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/ivan-photo.png'
  },
  {
    name: 'Анастасия Ремогузина',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/anastasia-photo.png'
  },
  {
    name: 'Иван Иванов',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/ivan-photo.png'
  },
  {
    name: 'Анастасия Ремогузина',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/anastasia-photo.png'
  },
  {
    name: 'Иван Иванов',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/ivan-photo.png'
  },
  {
    name: 'Анастасия Ремогузина',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/anastasia-photo.png'
  },
  {
    name: 'Иван Иванов',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/ivan-photo.png'
  },
  {
    name: 'Анастасия Ремогузина',
    speciality: 'Фотограф',
    description: 'Высококачественная видеосъёмка и аэросъёмка: доступные цены, профессиональное оборудование и опытные специалисты',
    avatar: '/website-layout/images/anastasia-photo.png'
  }
]