<script setup lang="ts">
defineProps<{
name: string,
avatar: string,
speciality: string,
description: string
}>()
</script>

<template>
  <div class="specialist-card">
    <div class="specialist-card__preview">
      <img class="specialist-card__avatar" :src="avatar" alt="specialist-avatar">
      <div class="badge">
        {{ speciality }}
      </div>
    </div>

    <div class="specialist-card__content">
      <div class="specialist-card__info">
        <div class="specialist-card__title">
          {{ name }}
        </div>

        <div class="specialist-card__description">
          {{ description }}
        </div>
      </div>

      <div class="specialist-card__actions">
        <button class="btn btn--primary">Пригласить</button>
        <button class="btn btn--secondary">Подробнее</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.badge {
  inset: auto 10px 10px 10px;

  padding: 5px 25px;
  border-radius: 28px;

  position: absolute;
  background-color: rgba(242, 242, 242, 0.7);

  font-size: 10px;
  font-weight: 600;
}

.specialist-card {
  display: flex;

  border-radius: 10px;
  overflow: hidden;

  background-color: rgb(242, 242, 242);
}

.specialist-card__preview {
  position: relative;

  flex-shrink: 0;

  width: 166px;
  height: 166px;

  overflow: hidden;
}

.specialist-card__avatar {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.specialist-card__content {
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 166px;
}

.specialist-card__info {
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 81px;
}

.specialist-card__title {
  font-size: 24px;
  font-weight: 600;

  color: rgb(0, 0, 0);
}

.specialist-card__description {
  font-size: 14px;
  font-weight: 400;

  color: rgb(0, 0, 0);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
}

.specialist-card__actions {
  display: flex;
  gap: 10px;

  & .btn {
    flex: 1;
  }
}
</style>