<script setup lang="ts">
defineProps<{
}>()

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <div class="modal-form">
    <div class="modal-form__title">Ошибка</div>
    <div class="modal-form__subtitle">Неверный запрос. Обратитесь в техподдержку</div>
    <button class="btn btn--primary" @click="closeModal">Принять</button>
  </div>
</template>

<style scoped>
.modal-form {
  display: flex;
  flex-direction: column;

  text-align: center;
}

.modal-form__subtitle {
  font-size: 14px;
  font-weight: 400;
}

.btn {
  flex: 1;
}
</style>