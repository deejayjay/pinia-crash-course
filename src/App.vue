<script setup>
import TodoList from './components/TodoList.vue';

const todoList = [
  {
    id: 1,
    text: 'Learn Vue',
    isCompleted: true
  },
  {
    id: 2,
    text: 'Build something awesome',
    isCompleted: false
  }
];

// Need to change this to use Pinia
// import { storeToRefs } from 'pinia';
</script>

<template>
  <header>
    <h1><i class="bi bi-check2-square"></i>To do App</h1>
  </header>
  <main>
    <TodoList :todos="todoList" />
  </main>
</template>

