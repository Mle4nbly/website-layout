<template>
  <div class="hero-content">
    <div class="hero-content__logo">
      <img src="/icons/checkbox-edit-pen-pencil.svg" alt="checkbox-edit-pen-pencil">
    </div>
    <div class="hero-content__title-wrapper">
      <h1 class="hero-content__title">СБР</h1>
      <h2 class="hero-content__subtitle">Сервис бронирования ресурсов</h2>
    </div>
  </div>
</template>

<style scoped>
.hero-content {
  display: flex;
  align-items: end;
}

.hero-content__logo {
  transform: translateY(34px);

  & img {
    display: block;
  }
}

.hero-content__title-wrapper {
  display: flex;
  gap: 63px;
}

.hero-content__title {
  font-size: 128px;
  font-weight: 600;
}

.hero-content__subtitle {
  font-size: 64px;
  font-weight: 400;
}
</style>