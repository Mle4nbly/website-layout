<template>
  <section class="dashboard">
    <div class="dashboard__content">
      <slot />
    </div>

    <div class="dashboard__sidebar">
      <DashboardSidebar />
    </div>
  </section>
</template>

<style scoped>
.dashboard {
  display: flex;
  justify-content: space-between;

  margin-right: 100px;
  margin-left: 100px;
}
</style>