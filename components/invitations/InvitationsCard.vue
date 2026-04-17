<script setup lang="ts">
import type { Sender } from '~/types/types';

defineProps<{
  title: string,
  time: string,
  sender: Sender
}>()
</script>

<template>
  <div class="invitation__card">
    <div class="invitation__title">
      {{ title }}
    </div>

    <div class="invitation__info">
      <div class="invitation__badge">
        {{ time }}
      </div>
      <div class="invitation__badge">
        {{ sender.name }}
      </div>
      <div class="invitation__badge">
        {{ sender.speciality }}
      </div>
    </div>

    <div class="invitation__actions">
      <button class="invitation__btn invitation__btn--primary">Подробнее</button>
      <button class="invitation__btn invitation__btn--secondary">Отклонить</button>
    </div>
  </div>
</template>

<style scoped>
.invitation__card {
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: rgba(242, 242, 242, 1);
  border-radius: 10px;

  padding: 30px;
  gap: 16px;
}

.invitation__title {
  font-size: 16px;
  font-weight: 600;
}

.invitation__info {
  display: flex;
  gap: 10px;
}

.invitation__badge {
  padding: 5px 16px;

  background-color: rgba(134, 174, 170, 1);
  border-radius: 5px;

  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
}

.invitation__actions {
  display: flex;
  gap: 10px;
}

.invitation__btn {
  padding: 10px 30px;
  border-radius: 6px;

  &.invitation__btn--primary {
    background-color: rgba(67, 113, 107, 1);
    color: rgba(255, 255, 255, 1);
  }

  &.invitation__btn--secondary {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);

    box-shadow: 0 0 10px rgba(81, 114, 163, 0.2);
  }
}
</style>