<script setup lang="ts">
import { computed } from 'vue'

type Day = {
  day: number
  isCurrent: boolean
  isToday: boolean
  isWeekend: boolean
}

const year = 2023
const month = 11
const today = 13

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const calendarDays = computed<Day[]>(() => {
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
})
</script>

<template>
  <div class="calendar">
    <div class="calendar__header">
      <div class="calendar__current">
        <span class="calendar__title">Декабрь 2023</span>

        <div class="calendar__arrow calendar__arrow--next">
          <img src="/icons/arrow-button.svg" alt="arrow-next">
        </div>
      </div>

      <div class="calendar__navigation">
        <div class="calendar__arrow calendar__arrow--prev">
          <img src="/icons/arrow-button.svg" alt="arrow-prev">
        </div>
        <div class="calendar__arrow calendar__arrow--next">
          <img src="/icons/arrow-button.svg" alt="arrow-next">
        </div>
      </div>
    </div>

    <div class="calendar__weekdays">
      <div 
        v-for="weekDay in weekDays"
        class="calendar__weekday"
      >
        {{ weekDay }}
      </div>
    </div>    

    <div class="calendar__grid">
      <div 
        v-for="(day, index) in calendarDays"
        :key="index"
        class="calendar__cell"
      >
        <div 
          class="calendar__day"
          :class="{
            'calendar__day--muted': !day.isCurrent,
            'calendar__day--today': day.isToday,
            'calendar__day--weekend': day.isWeekend
          }"
        >
          {{ day.day }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 460px;
  height: 364px;

  padding: 28px 40px;
  border-radius: 9px;

  background-color: rgba(242, 242, 242, 1);
}

.calendar__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar__weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.calendar__weekday {
  font-size: 12px;
  font-weight: 600;

  color: rgba(0, 70, 54, 1);

  text-align: center;
}

.calendar__cell {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 38px;
}

.calendar__day {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;

  border-radius: 15px;
  letter-spacing: -0.3px;

  &.calendar__day--today {
    color: rgb(255, 255, 255);

    background-color: rgba(67, 113, 107, 1);
  }

  &.calendar__day--weekend {
    color: rgba(255, 0, 0, 1);
  }

  &.calendar__day--muted {
    color: rgba(104, 104, 104, 1);
  }
}

.calendar__header {
  display: flex;
  justify-content: space-between;

  padding-right: 10px;
}

.calendar__current {
  display: flex;
  gap: 56px;
}

.calendar__title {
  font-size: 20px;
  font-weight: 700;

  line-height: 24px;
  letter-spacing: 0.4px;
}

.calendar__navigation {
  display: flex;

  gap: 16px;
}

.calendar__arrow {
  display: flex;
  align-items: center;
}

.calendar__arrow--prev img {
  rotate: 180deg;
}
</style>