<script setup lang="ts">
import { specialists } from '~/data/constants';
</script>

<template>
  <section class="specialists">
    <div class="specialists__headers">
      <SpecialistsFilters />
      <div class="specialists__actions">
        <button class="specialists__add-btn">
          <span>Добавить</span>
          <img src="/icons/plus-icon.svg" alt="plus-icon">
        </button>
      </div>
    </div>

    <div class="specialists__grid">
      <SpecialistsCard
        v-for="specialist in specialists"
        :name="specialist.name"
        :avatar="specialist.avatar"
        :speciality="specialist.speciality"
        :description="specialist.description"
      />
    </div>
  </section>
</template>

<style scoped>
.specialists {
  display: flex;
  flex-direction: column;

  width: 1199px;

  gap: 30px;
}

.specialists__headers {
  margin-left: 5px;

  display: flex;
  justify-content: space-between;
}

.specialists__grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.specialists__add-btn {
  width: 165px;

  display: flex;
  justify-content: space-between;

  padding: 12px 16px;

  border-radius: 10px;

  background-color: rgb(242, 242, 242);

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -1%;

  &:hover {
    background-color: rgb(233, 233, 233);
  }
}
</style>