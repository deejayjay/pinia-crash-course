<template>
  <form class="form" @submit.prevent="handleAddNewTodo">
    <div class="form-controls">
      <input type="text" class="form-control" v-model="todoText">
      <button class="add-btn">
        <i class="bi bi-plus-square-fill"></i>
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

import { useTodosStore } from '@/stores/todos';

const { addNewTodo } = useTodosStore();

const todoText = ref('');

function handleAddNewTodo() {
  addNewTodo(todoText.value);
  todoText.value = '';
}
</script>

<style scoped>
.form-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.form-control {
  flex: 1;
  padding: 0.5rem 1rem;
  height: 3rem;
  background-color: #33415562;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #fafafa;
}

.form-control:focus-visible {
  outline: 1px solid #2563eb;
}

.add-btn {
  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: #10b981;
  transition: color 0.25s;
}

.add-btn>i {
  font-size: 2.5rem;
}

.add-btn:hover {
  cursor: pointer;
  color: #16a34a;
}
</style>