<script setup lang="ts">
type Resource = {
  id: number
  title: string
  preview: string
  tags: string[]
}

export type TimeSlot = {
  id: number
  time: string
  available: boolean
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Коворкинг ИРНИТУ",
    preview: "/images/coworking-room-preview.png",
    tags: ["Фото", "Информация"]
  },
  {
    id: 2,
    title: "Переговорная ИРНИТУ",
    preview: "/images/meeting-room-preview.png",
    tags: ["Фото", "Информация"]
  }
]

const timeSlots: TimeSlot[] = [
  { id: 1, time: '08.00 - 09.00', available: false },
  { id: 2, time: '09.00 - 10.00', available: false },
  { id: 3, time: '10.00 - 11.00', available: true },
  { id: 4, time: '11.00 - 12.00', available: true },
  { id: 5, time: '12.00 - 13.00', available: false },
  { id: 6, time: '13.00 - 14.00', available: true },
  { id: 7, time: '14.00 - 15.00', available: false },
  { id: 8, time: '15.00 - 16.00', available: false },
  { id: 9, time: '16.00 - 17.00', available: false },
  { id: 10, time: '17.00 - 18.00', available: false },
  { id: 11, time: '18.00 - 19.00', available: false },
  { id: 12, time: '19.00 - 20.00', available: false }
]
</script>

<template>
  <section class="resources">
    <ResourcesCard 
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :preview="resource.preview"
      :tags="resource.tags"
      :time-slots="timeSlots"
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