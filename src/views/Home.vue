<template>
  <div class="container py-4">
    <!-- Форма додавання завдання -->
    <TaskForm @add-task="addTask" />

    <!-- Кнопки фільтрації -->
    <div class="d-flex justify-content-center my-4">
      <button
        class="btn btn-outline-danger me-2"
        :class="{ active: filter === 'all' }"
        @click="filter = 'all'"
      >
        Усі
      </button>
      <button
        class="btn btn-outline-danger me-2"
        :class="{ active: filter === 'active' }"
        @click="filter = 'active'"
      >
        Активні
      </button>
      <button
        class="btn btn-outline-danger"
        :class="{ active: filter === 'completed' }"
        @click="filter = 'completed'"
      >
        Виконані
      </button>
    </div>

    <!-- Список завдань -->
    <transition-group name="fade" tag="div" class="task-list">
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @delete-task="deleteTask"
        @toggle-status="toggleStatus"
      />
    </transition-group>
  </div>
</template>


<script>
import TaskForm from '@/components/TaskForm.vue';
import TaskItem from '@/components/TaskItem.vue';
import { useTaskStore } from '@/stores/taskStore.js';

export default {
  components: { TaskForm, TaskItem },
  data() {
    return { filter: 'all' };
  },
  computed: {
    tasks() {
      return useTaskStore().tasks;
    },
    filteredTasks() {
      if (this.filter === 'active') return this.tasks.filter(task => !task.completed);
      if (this.filter === 'completed') return this.tasks.filter(task => task.completed);
      return this.tasks;
    }
  },
  methods: {
    addTask(task) {
      useTaskStore().addTask(task);
    },
    deleteTask(id) {
      const taskStore = useTaskStore();
      taskStore.tasks = taskStore.tasks.filter(task => task.id !== id);
    },
    toggleStatus(id) {
      useTaskStore().toggleTaskStatus(id);
    }
  }
};
</script>

<style scoped>

</style>
