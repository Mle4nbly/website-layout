import { ref, computed } from 'vue'
import { calendarDays } from '~/utils/calendarDays'

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель',
  'Май', 'Июнь', 'Июль', 'Август',
  'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

export const useCalendar = () => {
  const currentDate = ref(new Date())

  const year = computed(() => currentDate.value.getFullYear())
  const month = computed(() => currentDate.value.getMonth())

  const days = computed(() =>
    calendarDays(currentDate.value)
  )

  const title = computed(() =>
    `${monthNames[month.value]} ${year.value}`
  )

  return {
    days,
    title
  }
}