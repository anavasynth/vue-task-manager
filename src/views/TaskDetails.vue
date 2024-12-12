<template>
  <div v-if="task" class="container py-4">
    <div class="card shadow-sm">
      <div class="card-body">
        <h2 class="card-title">{{ task.title }}</h2>
        <p class="card-text">{{ task.description }}</p>
        <p class="card-text">
          <strong>Статус:</strong>
          <span :class="task.completed ? 'text-success' : 'text-warning'">
            {{ task.completed ? ' Виконано' : ' Активне' }}
          </span>
        </p>
        <div class="d-flex gap-2">
          <button class="btn btn-secondary" @click="$router.push('/')">Назад</button>
          <button class="btn btn-primary" @click="$router.push(`/edit/${task.id}`)">Редагувати</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore.js';

export default {
  props: ['id'],
  computed: {
    task() {
      return useTaskStore().tasks.find(task => task.id === Number(this.id));
    }
  }
};
</script>

<style scoped>

</style>
