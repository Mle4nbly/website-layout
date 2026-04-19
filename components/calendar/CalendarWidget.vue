<script setup lang="ts">
import { computed } from 'vue'
import { weekDays } from '~/data/constants';

const calendar = computed(() => 
  calendarDays()
)
</script>

<template>
  <div class="calendar">
    <div class="calendar__header">
      <div class="calendar__current">
        <span class="calendar__title">Декабрь 2023</span>

        <button class="calendar__arrow calendar__arrow--next">
          <img src="/icons/arrow-button.svg" alt="arrow-next">
        </button>
      </div>

      <div class="calendar__navigation">
        <button class="calendar__arrow calendar__arrow--prev">
          <img src="/icons/arrow-button.svg" alt="arrow-prev">
        </button>
        <button class="calendar__arrow calendar__arrow--next">
          <img src="/icons/arrow-button.svg" alt="arrow-next">
        </button>
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
        v-for="(day, index) in calendar"
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

  &.calendar__day--weekend {
    color: rgba(255, 0, 0, 1);
  }

  &.calendar__day--muted {
    opacity: 0.6;
  }

  &.calendar__day--today {
    color: rgb(255, 255, 255);

    background-color: rgba(67, 113, 107, 1);
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