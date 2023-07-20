<template>
  <div class="todo">
    <div class="todo__text">{{ todo.text }}</div>
    <div class="todo__actions">
      <button v-if="!todo.isCompleted" class="todo__action completed-btn" @click="handleCompleted(todo.id)">
        <i class="bi bi-check-circle-fill"></i>
      </button>
      <button v-else class="todo__action not-completed-btn" @click="handleNotCompleted(todo.id)">
        <i class="bi bi-arrow-counterclockwise"></i>
      </button>
      <button class="todo__action delete-btn" @click="handleDelete(todo.id)">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useTodosStore } from '@/stores/todos';

const { deleteTodo } = useTodosStore();

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});

function handleCompleted(todoId) {
  console.log(`Todo ${todoId} was marked completed`);
  // Add logic to mark the ToDo as completed
}

function handleNotCompleted(todoId) {
  console.log(`Todo ${todoId} was marked not completed`);
  // Add logic to mark the ToDo as not completed
}

function handleDelete(todoId) {
  deleteTodo(todoId);
}
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todo__actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.todo__action {
  border: none;
  background-color: transparent;
}

.completed-btn {
  color: #10b981;
}

.delete-btn {
  color: #be123c;
}

.not-completed-btn {
  color: #64748b;
}

.not-completed-btn,
.delete-btn,
.completed-btn {
  transition: color 0.25s;
  font-size: 1.5rem;
  transition: color 0.25s;
}

.not-completed-btn:hover,
.delete-btn:hover,
.completed-btn:hover {
  cursor: pointer;
}

.not-completed-btn:hover {
  color: #2563eb;
}

.completed-btn:hover {
  color: #16a34a;
}

.delete-btn:hover {
  color: #f43f5e;
}
</style>