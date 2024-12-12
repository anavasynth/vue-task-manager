<template>
  <div class="card mb-3 shadow-sm bg-dark text-light">
    <div class="card-body">
      <h3
        class="card-title"
        :class="{ 'text-decoration-line-through text-muted': task.completed }"
        @click="goToDetails"
        style="cursor: pointer;"
      >
        {{ task.title }}
      </h3>
      <p class="card-text">{{ task.description }}</p>
      <div class="d-flex gap-2">
        <button class="btn btn-primary btn-sm" @click="toggleStatus">
          {{ task.completed ? "Не виконано" : "Виконано" }}
        </button>
        <button class="btn btn-danger btn-sm" @click="deleteTask">Видалити</button>
        <button class="btn btn-secondary btn-sm" @click="editTask">Редагувати</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    toggleStatus() {
      this.$emit('toggle-status', this.task.id);
    },
    deleteTask() {
      this.$emit('delete-task', this.task.id);
    },
    goToDetails() {
      this.$router.push(`/task/${this.task.id}`);
    },
    editTask() {
      this.$router.push(`/edit/${this.task.id}`);
    }
  }
};
</script>

<style scoped>

</style>
