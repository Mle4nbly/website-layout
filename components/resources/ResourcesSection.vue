<script setup lang="ts">
import { reservationTimeSlots, resources } from '~/data/constants';
</script>

<template>
  <section class="resources">
    <ResourcesCard 
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :preview="resource.preview"
      :tags="resource.tags"
      :time-slots="reservationTimeSlots"
    />
  </section>
</template>

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
  gap: 45px;
}
</style>