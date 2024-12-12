import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.saveToLocalStorage();
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveToLocalStorage();
    },
    toggleTaskStatus(id) {
      const task = this.tasks.find(task => task.id === id);
      if (task) task.completed = !task.completed;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    editTask(updatedTask) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = { ...this.tasks[index], ...updatedTask };
        this.saveToLocalStorage();
      }
    }

  }
});
