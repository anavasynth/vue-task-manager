<template>
  <div id="app">
    <header class="text-white p-3">
      <h1>Керування завданнями</h1>
      <nav class="mt-2">
        <router-link to="/" class="btn btn-outline-light">Список завдань</router-link>
      </nav>
    </header>
    <main class="container my-4 flex-grow-1">
      <router-view />
    </main>
    <footer class="bg-dark text-center py-3">
      <p>&copy; "TaskManager". Всі права захищені.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
