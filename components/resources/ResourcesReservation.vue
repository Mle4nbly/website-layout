<script setup lang="ts">
import type { TimeSlot } from '~/types/types';



defineProps<{
  timeSlots: TimeSlot[]
}>()
</script>

<template>
  <div class="reservation">
    <div class="reservation__badges">
      <div 
        v-for="slot in timeSlots"
        :key="slot.id"
        class="badge badge--primary"
        :class="{'badge badge--secondary': !slot.available}"
      >
        {{ slot.time }}
      </div>
    </div>
    <div class="reservation__actions">
      <button class="btn btn--primary">
        Забронировать
      </button>
      <button class="btn btn--secondary">
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

.reservation__badges {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 938px;
  row-gap: 10px;
}

.badge {
  width: 145px;
}

.reservation__actions {
  flex: 1;

  display: flex;
  flex-direction: column;

  gap: 10px;
}
</style>