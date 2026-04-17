<script setup lang="ts">
import type { TimeSlot } from '~/types/types';



defineProps<{
  timeSlots: TimeSlot[]
}>()
</script>

<template>
  <div class="reservation">
    <div class="reservation__slots">
      <div 
        v-for="slot in timeSlots"
        :key="slot.id"
        class="reservation__slot"
        :class="{'reservation__slot--disabled': !slot.available}"
      >
        {{ slot.time }}
      </div>
    </div>
    <div class="reservation__actions">
      <button class="reservation__btn reservation__btn--primary">
        Забронировать
      </button>
      <button class="reservation__btn reservation__btn--secondary">
        Подробнее
      </button>
    </div>
  </div>
</template>

<style scoped>
.reservation {
  display: flex;
  justify-content: space-between;

  gap: 30px;
}

.reservation__slots {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 938px;
  row-gap: 10px;
}

.reservation__slot {
  font-size: 14px;
  font-weight: 400;

  border-radius: 6px;
  text-wrap: nowrap;

  width: 145px;

  background-color: rgba(134, 174, 170, 1);
  color: rgb(255, 255, 255);
  padding: 10px 30px;
}

.reservation__slot--disabled {
  background-color: rgba(220, 231, 230, 1);
  color: rgba(0, 0, 0, 1);
}

.reservation__actions {
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 10px;
}

.reservation__btn {
  font-size: 14px;
  font-weight: 700;

  padding: 10px 25px;
  border-radius: 6px;

  &.reservation__btn--primary {
    background-color: rgba(67, 113, 107, 1);
    color: rgba(255, 255, 255, 1);
  }

  &.reservation__btn--secondary {
    background-color: rgba(255, 255, 255, 1);
    color: rgb(0, 0, 0);

    box-shadow: 0 0 10px rgba(81, 114, 163, 0.2);
  }
}
</style>