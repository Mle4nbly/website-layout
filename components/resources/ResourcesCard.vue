<script setup lang="ts">
import type { TimeSlot } from '~/types/types';

defineProps<{
  title: string
  preview: string
  tags: string[]
  timeSlots: TimeSlot[]
}>()
</script>

<template>
  <div class="resource-card">
    <div class="resource-card__preview">
      <img class="resource-card__image" :src="preview" alt="resource-preview">

      <div class="resource-card__overlay">
        <div class="resource-card__badges">
          <div
            v-for="(tag, index) in tags"
            :key="index"
            class="badge"
          >
            {{ tag }}
          </div>
        </div>
        <div class="resource-card__title">
          {{ title }}
        </div>
      </div>
    </div>
    
    <div class="resource-card__reservation">
      <ResourcesReservation :time-slots="timeSlots"/>
    </div>
  </div>
</template>

<style scoped>
.badge {
  padding: 8px 25px;
  font-weight: 400;
}

.resource-card {
  display: flex;
  flex-direction: column;

  width: 1204px;
  height: 380px;

  background-color: rgba(242, 242, 242, 1);

  border-radius: 10px;
  overflow: hidden;
}

.resource-card__preview {
  position: relative;
  height: 260px;
}

.resource-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.resource-card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.resource-card__badges {
  display: flex;

  margin-top: 17px;
  margin-left: 16px;
  gap: 25px;
}

.resource-card__tag {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;

  padding: 8px 25px;
}

.resource-card__title {
  font-size: 20px;
  font-weight: 600;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;

  padding: 8px 20px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.resource-card__reservation {
  margin: 16px;
}
</style>