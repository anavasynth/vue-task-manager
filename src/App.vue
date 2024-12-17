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
#app {
  font-family: 'Arial', sans-serif;
  background-color: #121212; /* Темний фон для додатка */
  color: #e0e0e0; /* Світлий текст для контрасту */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Стилі для хедера */
header {
  background-color: #1f1f1f; /* Темний фон для хедера */
  color: #ffffff; /* Білий текст */
  padding: 1rem;
  text-align: center;
  border-bottom: 2px solid #343a40; /* Тонка границя для відокремлення */
}

header nav a {
  color: #e0e0e0; /* Світлий текст для посилань */
  text-decoration: none;
  margin: 0 1rem;
}

header nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid #e63946; /* Підкреслення активної сторінки */
}

main {
  flex-grow: 1;
  padding: 1rem;
}

/* Темний стиль футера */
footer {
  background-color: #1f1f1f; /* Темний фон */
  color: #e0e0e0; /* Світлий текст */
  font-size: 0.9rem;
  text-align: center;
  border-top: 2px solid #343a40;
}

/* Кнопки */
.btn-outline-light {
  border-color: #e63946;
  color: #e63946;
}

.btn-outline-light:hover {
  background-color: #e63946;
  color: #ffffff;
}

.btn {
  margin: 0.5rem 0; /* Відступи між кнопками */
}

.container {
  background-color: #1e1e1e; /* Темний фон для контейнера */
  padding: 2rem;
  border-radius: 8px; /* Округлені кути */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); /* Тінь для ефекту */
}

.text-muted {
  color: #aaa !important; /* Світлий колір для завершених завдань */
}
</style>
