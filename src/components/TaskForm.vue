<template>
  <form @submit.prevent="submitTask" class="form-group p-3 border rounded shadow-sm bg-dark text-light">
    <div class="mb-3">
      <label for="title" class="form-label">Назва завдання</label>
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
        placeholder="Введіть опис"
        rows="3">
      </textarea>
    </div>
    <button type="submit" class="btn btn-primary">Додати завдання</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    submitTask() {
      if (this.title.trim()) {
        this.$emit('add-task', {
          id: Date.now(),
          title: this.title,
          description: this.description,
          completed: false
        });
        this.title = '';
        this.description = '';
      }
    }
  }
};
</script>

<style scoped>

</style>
