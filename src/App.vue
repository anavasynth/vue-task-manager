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

<style>
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
