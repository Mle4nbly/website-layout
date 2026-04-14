<script setup lang="ts">
import type { TimeSlot } from './ResourcesSection.vue';

defineProps<{
  title: string
  preview: string
  tags: string[]
  timeSlots: TimeSlot[]
}>()
</script>

<template>
  <div class="resources-card">
    <div class="resources-card__preview">
      <img class="resources-card__image" :src="preview" alt="resource-preview">

      <div class="resources-card__overlay">
        <div class="resources-card__tags">
          <div
            v-for="(tag, id) in tags"
            :key="id"
            class="resources-card__tag"
          >
            {{ tag }}
          </div>
        </div>
        <div class="resources-card__title">
          {{ title }}
        </div>
      </div>
    </div>
    
    <div class="resources-card__reservation">
      <ResourcesReservation :time-slots="timeSlots"/>
    </div>
  </div>
</template>

<style scoped>
.resources-card {
  display: flex;
  flex-direction: column;

  width: 1204px;
  height: 380px;

  background-color: rgba(242, 242, 242, 1);

  border-radius: 10px;
  overflow: hidden;
}

.resources-card__preview {
  position: relative;
  height: 260px;
}

.resources-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.resources-card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.resources-card__tags {
  display: flex;

  margin: 16px 17px;
  gap: 25px;
}

.resources-card__tag {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;

  padding: 8px 25px;
}

.resources-card__title {
  font-size: 20px;
  font-weight: 600;

  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;

  padding: 8px 20px;
  margin: 10px;
}

.resources-card__reservation {
  margin: 16px;
}
</style>