<template>
  <div class="todo">
    <div class="todo__text">{{ todo.text }}</div>
    <div class="todo__actions">
      <button v-if="!todo.isCompleted"
              class="todo__action check-btn">
        <i class="bi bi-check-circle-fill"></i>
      </button>
      <button v-else
              class="todo__action undo-btn">
        <i class="bi bi-arrow-counterclockwise"></i>
      </button>
      <button class="todo__action delete-btn">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});
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

.check-btn {
  color: #10b981;
}

.delete-btn {
  color: #be123c;
}

.undo-btn {
  color: #64748b;
}

.undo-btn,
.delete-btn,
.check-btn {
  transition: color 0.25s;
  font-size: 1.5rem;
}
</style>