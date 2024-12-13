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
.form-group {
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.form-group .form-label {
  font-weight: bold;
}

.form-control {
  color: #e0e0e0;
}

.form-control::placeholder {
  color: #a9a9a9;
}

.form-control:focus {
  border-color: #e63946;
  box-shadow: 0 0 5px rgba(230, 57, 70, 0.5);
}

.btn-primary {
  background-color: #e63946;
  border-color: #e63946;
}

.btn-primary:hover {
  background-color: #d62839;
  border-color: #d62839;
}
</style>
