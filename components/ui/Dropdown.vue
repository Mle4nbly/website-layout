<script setup lang="ts">
const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="dropdown">
    <button class="btn btn--icon" @click="toggleDropdown">
      <img src="/icons/profile-icon.svg" alt="profile-icon">
    </button>

    <div class="dropdown__menu" v-if="isOpen">
      <div class="dropdown__title">
        Иван Иванов
        <button class="btn btn--icon">
          <img src="/icons/setting-icon.svg" alt="setting-icon">
        </button>
      </div>

      <div class="dropdown__subtitle">
        example@yandex.ru
      </div>

      <button class="btn btn--primary" >Выход</button>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  width: 54px;
  height: 54px;

  position: relative;
}

.dropdown__menu {
  display: flex;
  flex-direction: column;

  z-index: 50;

  position: absolute;
  right: 0px;

  padding: 20px;
  gap: 16px;
  
  border-radius: 10px;

  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgba(81, 114, 163, 0.2);
}

.dropdown__title {
  display: flex;
  justify-content: space-between;

  font-size: 16px;
  font-weight: 600;

  color: rgb(0, 0, 0);
}

.dropdown__subtitle {
  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-weight: 400;

  color: rgb(0, 0, 0);
}
</style>