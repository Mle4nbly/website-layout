<template>
  <div class="navbar">
    <div class="navbar__group">
      <div class="navbar__logo">
        <img src="/icons/checkbox-edit-pen-pencil.svg" width="64px" height="64px" alt="checkbox-edit-pen-pencil">
      </div>
    </div>
    <div class="navbar__group">
      <div class="navbar__menu">
        <NuxtLink class="navbar__link">
          Аппаратура
        </NuxtLink>
        <NuxtLink 
          to="/specialists"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          <span>Люди</span>
        </NuxtLink>
        <NuxtLink 
          to="/"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          <span>Пространство</span>
        </NuxtLink>
        <NuxtLink class="navbar__link">
          Профиль
        </NuxtLink>
      </div>
      <div class="navbar__profile">
        <img src="/icons/profile-icon.svg" alt="profile-icon">
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(21, 21, 20, 1);
  opacity: 0.8;

  padding: 10px 50px;
}

.navbar__group {
  display: flex;
  align-items: center;

  gap: 37px;
}

.navbar__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 876px;
}

.navbar__link {
  text-decoration: none;
  color: white;

  display: flex;
  align-items: center;

  cursor: pointer;

  font-size: 24px;
  font-weight: 600;

  padding: 4px 0;

  &.navbar__link--active {
    text-decoration: none;
    color: white;

    border-bottom: 1px solid white;
  }
}
</style>