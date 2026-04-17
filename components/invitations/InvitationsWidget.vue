<script setup lang="ts">
import type { Invitation } from '~/types/types';

const activeInvitations: Invitation[] = [
  {
    title: 'Съёмки в первомайском',
    sender: {
      name: 'Иванов И. В.',
      speciality: 'Фотограф'
    },
    time: '10.00 - 12.00'
  },
  {
    title: 'Съёмки в первомайском',
    sender: {
      name: 'Иванов И. В.',
      speciality: 'Фотограф'
    },
    time: '10.00 - 12.00'
  }
]
</script>

<template>
  <div class="invitations">
    <div class="invitations__title">
      Активные приглашения
    </div>
    <InvitationsCard 
      v-for="invitation in activeInvitations"
      :title="invitation.title"
      :time="invitation.time"
      :specialist="invitation.sender"
    />
    <div class="invitations__cards">
    </div>
  </div>
</template>

<style scoped>
.invitations {
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 460px;
}

.invitations__title {
  font-size: 20px;
  font-weight: 600;
}

.invitations__cards {
  display: flex;
  flex-direction: column;
  
  gap: 16px;
}
</style>