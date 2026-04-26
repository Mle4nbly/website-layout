<script setup lang="ts">
import { reservationTimeSlots, responsibles } from '~/data/constants';
import type { ReservationModalProps, TimeSlot } from '~/types/types';

defineProps<{
  timeSlots: TimeSlot[]
}>();

const modalType = ref<'reservation' | 'error' | null>(null)
const modalProps = ref<ReservationModalProps | null>(null)

const openReservation = () => {
  modalType.value = 'reservation';
  modalProps.value = {responsibles, timeSlots: reservationTimeSlots}
}

const openError = () => {
  modalType.value = 'error';
}

const closeModal = () => {
  modalType.value = null;
}
</script>

<template>
  <div class="reservation">
    <div class="reservation__badges">
      <div 
        v-for="slot, id in timeSlots"
        :key="id"
        class="badge"
        :class="{
          'badge--secondary': !slot.available,
          'badge--primary': slot.available,
        }"
      >
        {{ slot.time }}
      </div>
    </div>
    <div class="reservation__actions">
      <button class="btn btn--primary" @click="openReservation">
        Забронировать
      </button>
      <button class="btn btn--secondary">
        Подробнее
      </button>
    </div>
  </div>

  <ModalsBaseModal 
    v-if="modalType"
    :modal-type="modalType" 
    :modal-props="modalProps"
    @close="closeModal"
    @open-error="openError"
  />
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