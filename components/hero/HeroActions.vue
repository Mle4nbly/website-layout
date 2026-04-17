<template>
  <div class="hero-actions">
    <button class="hero-actions__btn">Вход</button>
    <button class="hero-actions__btn">Регистрация</button>
  </div>
</template>

<style scoped>
.hero-actions {
  display: flex;

  gap: 32px;
}

.hero-actions__btn {
  font-size: 32px;
  font-weight: 600;

  gap: 10px;

  padding: 10px 60px;
  border-radius: 47px;

  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);

  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
</style>