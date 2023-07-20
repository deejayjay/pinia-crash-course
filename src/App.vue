<script setup>
import { storeToRefs } from 'pinia';

import { useTodosStore } from '@/stores/todos';
import TodoList from './components/TodoList.vue';
import NewTodo from './components/NewTodo.vue';

const todoStore = useTodosStore();

const { filteredTodos: todos, theme } = storeToRefs(todoStore);
const { toggleTheme } = todoStore;
</script>

<template>
  <div class="app__wrapper"
       :class="theme === 'light' ? 'light' : ''">
    <header class="top-bar">
      <h1 class="top-bar__title">
        <i class="bi bi-check2-square icon-todo"></i>ToDoodle
      </h1>
      <div class="theme-buttons">
        <button v-show="theme === 'dark'"
                type="button"
                class="theme-btn"
                aria-label="Toggle to light mode"
                @click="toggleTheme">
          <i class="bi bi-brightness-high-fill icon-sun"></i>
        </button>
        <button v-show="theme === 'light'"
                type="button"
                class="theme-btn"
                aria-label="Toggle to dark mode"
                @click="toggleTheme">
          <i class="bi bi-moon-stars-fill icon-moon"></i>
        </button>
      </div>
    </header>
    <main class="main">
      <NewTodo />
      <TodoList :todos="todos" />
    </main>
  </div>
</template>

<style scoped>
.app__wrapper {
  min-height: 100vh;
  background-color: #0f172a;
}

.app__wrapper.light {
  background-color: #f8fafc;
}

.top-bar {
  background-color: #f43f5e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-bar__title {
  font-size: 1.5rem;
}

.icon-todo {
  margin-right: 0.75rem;
}

.theme-btn {
  background-color: transparent;
  color: #fafafa;
  border: none;
  font-size: 1.25rem;
  transition: color 0.25s;
}

.theme-btn:hover {
  cursor: pointer;
  color: #ffb7c3;
}

.main {
  padding: 1rem;
  width: min(100%, 1280px);
  margin: 0 auto;
}
</style>

