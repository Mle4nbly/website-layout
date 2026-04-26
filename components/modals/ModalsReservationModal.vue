<script setup lang="ts">
import type { TimeSlot } from '~/types/types';

const props = defineProps<{
  slots: TimeSlot[],
  responsibles: string[]
}>();

const emit = defineEmits(['close', 'open-error']);

const timeSlots = ref<TimeSlot[]>(
  props.slots.map(slot => ({ ...slot }))
);

const closeModal = () => {
  emit('close')
};

const openError = () => {
  closeModal();
  emit('open-error');
}
</script>

<template>
  <div class="modal-form">
    <div class="modal-form__title">
      Бронирование
    </div>

    <section class="modal-form__section">
      <div class="modal-form__field-group">
        <div class="modal-form__subtitle">Мероприятие</div>
        <div class="modal-form__select">
          <input class="modal-form__field" placeholder="Выберите мероприятие">
          <button class="btn btn--icon" type="button">
            <img src="/icons/arrow-down.svg" alt="arrow-down">
          </button>
        </div>
      </div>
    </section>

    <section class="modal-form__section">
      <div class="modal-form__subtitle">Выберите время мероприятия</div>
      <div class="modal-form__grid">
        <button 
          v-for="slot, id in timeSlots"
          :key="id"
          class="badge"
          :class="{
            'badge--secondary': !slot.available,
            'badge--primary': slot.available
          }"
          type="button"
          @click="() => {
            slot.available = !slot.available
          }"
        >
          {{ slot.time }}
        </button>
      </div>
    </section>

    <section class="modal-form__section">
      <div class="modal-form__field-group">
        <div class="modal-form__subtitle">Ответственные лица</div>
        <div class="modal-form__list">
          <span class="modal-form__badge" v-for="responisble in responsibles">
            {{ responisble }}
          </span>
          <button class="btn btn--icon" type="button">
            <img src="/icons/plus-icon.svg" alt="plus-icon">
          </button>
        </div>
      </div>
    </section>

    <section class="modal-form__section">
      <div class="modal-form__field-group">
        <div class="modal-form__subtitle">Дополнительная информация</div>
        <input class="modal-form__field" placeholder="Добавить комментарий">
      </div>
    </section>

    <div class="modal-form__actions">
      <button class="btn btn--primary" @click="openError">Забронировать</button>
      <button class="btn btn--secondary" @click="closeModal">Отмена</button>
    </div>
  </div>
</template>

<style scoped>
.badge {
  padding: 10px 15px;
}

.btn--secondary {
  padding: 10px 25px;
}

.btn--primary {
  padding: 10px 25px;

  flex: 1;
}
</style>