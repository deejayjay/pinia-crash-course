<template>
  <form class="form"
        @submit.prevent="handleAddNewTodo">
    <div class="form-controls__wrapper">
      <label for="todoText"
             class="form-label">New Todo:</label>
      <div class="form-controls">
        <input type="text"
               id="todoText"
               class="form-control"
               v-model="todoText">
        <button type="submit"
                class="add-btn"
                aria-label="Add new todo">
          <i class="bi bi-plus-square-fill"></i>
        </button>
      </div>
    </div>
  </form>
  <hr class="divider">
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toast-notification';

import { useTodosStore } from '@/stores/todos';

const { addNewTodo } = useTodosStore();
const $toast = useToast();
// override the global option
const toastOptions = {
  position: 'bottom',
  duration: 2500
}
const todoText = ref('');

// Add the new todo to the store and show a notification
function handleAddNewTodo() {
  if (todoText.value.trim() === '') {
    $toast.error('Todo text cannot be empty', toastOptions);
    return;
  }
  addNewTodo(todoText.value);
  $toast.success('Todo was added successfully', toastOptions);
  todoText.value = '';
}
</script>

<style scoped>
.form-control__wrapper {
  margin-top: 1rem;
  ;
}

.form-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  top: -0.25rem;
}

.form-label {
  color: #94a3b8;
  font-weight: 300;
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

.divider {
  border-color: #1e293b;
  margin: 0.25rem 0 2rem;
}
</style>