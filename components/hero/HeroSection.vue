<script setup lang="ts">
import HeroActions from './HeroActions.vue';
import HeroContent from './HeroContent.vue';

</script>

<template>
  <section class="hero">
    <div class="hero__content">
      <HeroContent />
    </div>

    <div class="hero__actions">
      <HeroActions />
    </div>
    
    <div class="hero__description">
      <p>
        Рыбатекст используется дизайнерами, проектировщиками и фронтендерами, когда нужно быстро заполнить макеты или прототипы содержимым. 
        Это тестовый контент, который не должен нести никакого смысла, лишь показать наличие самого текста или продемонстрировать типографику в деле.
      </p>
    </div>

    <div class="hero__navbar">
      <HeroNavbar />
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  height: 1035px;
  
  color: white;

  background: url('/images/hero-bg.png') center/cover no-repeat;
}

.hero__content {
  max-width: 1400px;
  width: 100%;
}

.hero__actions {
  margin-top: 61px;
}

.hero__description {
  font-weight: 600;
  font-size: 24px;

  width: 921px;
  
  margin-top: 124px;
  
  text-align: center;
}

.hero__navbar {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}
</style>