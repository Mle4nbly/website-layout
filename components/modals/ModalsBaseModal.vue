<script setup lang="ts">
import type { ReservationModalProps } from '~/types/types'

defineProps<{
  modalType: 'create' | 'reservation' | 'error' | null,
  modalProps: ReservationModalProps | null
}>()

const emit = defineEmits(['close', 'open-error']);

const closeModal = () => emit('close')

const openError = () => emit('open-error')
</script>

<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__overlay" @click="closeModal"/>

      <div class="modal__content" v-if="modalType === 'create' || modalType === 'reservation'">
        <ModalsCreateModal v-if="modalType === 'create'"
          @close="closeModal"
          @open-error="openError"
        />

        <ModalsReservationModal 
          v-if="modalType === 'reservation' && modalProps" 
          :responsibles="modalProps.responsibles" 
          :slots="modalProps.timeSlots"
          @close="closeModal"
          @open-error="openError"
        />
      </div>

      <div class="modal__error-content" v-if="modalType === 'error'">
        <ModalsErrorModal 
          v-if="modalType === 'error'"
          @close="closeModal"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal__content {
  position: relative;
  width: 482px;

  display: flex;
  flex-direction: column;

  background: rgb(242, 242, 242);
  border-radius: 10px;
  padding: 32px;

  gap: 16px;
}

.modal__error-content {
  position: relative;
  width: 372px;

  display: flex;
  flex-direction: column;

  background: rgb(242, 242, 242);
  border-radius: 10px;
  padding: 20px 30px; 

  gap: 16px;
}

.modal__actions {
  display: flex;
  gap: 10px;
}

.btn--primary {
  flex: 1;
}
</style>