import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TaskDetails from '@/views/TaskDetails.vue';
import EditTask from '@/views/EditTask.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/vue-task-manager', component: Home },
  { path: '/task/:id', component: TaskDetails, props: true },
  { path: '/edit/:id', component: EditTask, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
