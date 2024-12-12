<template>
  <div v-if="task" class="container py-4">
    <h2 class="card-title text-center mb-4">Редагувати завдання</h2>
    <div class="card shadow-sm bg-dark text-light">
      <form @submit.prevent="updateTask" class="form-group p-3 border rounded shadow-sm text-light">
        <div class="mb-3">
          <label for="title" class="form-label">Назва</label>
          <input
            v-model="title"
            id="title"
            type="text"
            class="form-control bg-secondary text-light border-0"
            placeholder="Введіть назву завдання"
            required
          />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Опис</label>
          <textarea
            v-model="description"
            id="description"
            class="form-control bg-secondary text-light border-0"
            rows="4"
            placeholder="Введіть опис завдання"
          ></textarea>
        </div>
        <div class="d-flex justify-content-between">
          <button type="submit" class="btn btn-secondary">Зберегти</button>
          <button type="button" class="btn btn-danger" @click="$router.push('/')">Відмінити</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/taskStore';

export default {
  props: ['id'],
  data() {
    return {
      title: '',
      description: '',
      task: null
    };
  },
  computed: {
    tasks() {
      return useTaskStore().tasks;
    }
  },
  methods: {
    loadTask() {
      this.task = this.tasks.find(task => task.id === Number(this.id));
      if (this.task) {
        this.title = this.task.title;
        this.description = this.task.description;
      } else {
        this.$router.push('/');
      }
    },
    updateTask() {
      if (this.task) {
        useTaskStore().editTask({
          id: this.task.id,
          title: this.title,
          description: this.description
        });
        this.$router.push('/');
      }
    }
  },
  mounted() {
    this.loadTask();
  }
};
</script>

<style scoped>

</style>

