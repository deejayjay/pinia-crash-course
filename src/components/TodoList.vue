<template>
  <ul role="list"
      class="list-items">
    <li v-for="todo in todos"
        role="listitem"
        class="list-item"
        :class="todo.isCompleted ? 'completed' : 'not-completed'">
      <TodoItem :todo="todo" />
    </li>
  </ul>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.list-items {
  margin-top: 1rem;
  border: 1px solid #334155;
  border-left: none;
  border-radius: 0 8px 8px 0;
}

.list-item {
  padding: 1rem;
}

.list-item:nth-child(even) {
  background-color: #33415562;
}

list-item:last-child {
  padding-bottom: 1rem;
}

.list-item.not-completed {
  border-left: 6px solid #10b981;
}

.list-item.completed {
  text-decoration: line-through;
  border-left: 6px solid #be123c;
}
</style>