<template>
  <ul role="list">
    <li v-for="todo in todos"
        role="listitem">
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