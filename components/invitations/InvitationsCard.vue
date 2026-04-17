<script setup lang="ts">
import type { Sender } from '~/types/types';

defineProps<{
  title: string,
  time: string,
  specialist: Sender
}>()
</script>

<template>
  <div class="invitation-card__card">
    <div class="invitation-card__title">
      {{ title }}
    </div>

    <div class="invitation-card__info">
      <div class="badge badge--primary">
        {{ time }}
      </div>
      <div class="badge badge--primary">
        {{ specialist.name }}
      </div>
      <div class="badge badge--primary">
        {{ specialist.speciality }}
      </div>
    </div>

    <div class="invitation-card__actions">
      <button class="btn btn--primary">Подробнее</button>
      <button class="btn btn--secondary">Отклонить</button>
    </div>
  </div>
</template>

<style scoped>
.badge {
  padding: 5px 16px;
}

.invitation-card__card {
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: rgba(242, 242, 242, 1);
  border-radius: 10px;

  padding: 30px;
  gap: 16px;
}

.invitation-card__title {
  font-size: 16px;
  font-weight: 600;
}

.invitation-card__info {
  display: flex;
  gap: 10px;
}

.invitation-card__badge {
  padding: 5px 16px;

  background-color: rgba(134, 174, 170, 1);
  border-radius: 5px;

  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
}

.invitation-card__actions {
  display: flex;
  gap: 10px;
}

.invitation-card__btn {
  padding: 10px 30px;
  border-radius: 6px;

  &.invitation-card__btn--primary {
    background-color: rgba(67, 113, 107, 1);
    color: rgba(255, 255, 255, 1);
  }

  &.invitation-card__btn--secondary {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);

    box-shadow: 0 0 10px rgba(81, 114, 163, 0.2);
  }
}
</style>