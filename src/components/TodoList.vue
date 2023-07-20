<template>
  <TodoFilter />
  <ul role="list"
      v-if="todos.length > 0"
      class="list-items">
    <li v-for="todo in todos"
        role="listitem"
        class="list-item"
        :class="todo.isCompleted ? 'completed' : 'not-completed'">
      <TodoItem :todo="todo" />
    </li>
  </ul>
  <p v-else
     class="no-todos">No todos yet!</p>
</template>

<script setup>
import TodoItem from './TodoItem.vue';
import TodoFilter from './TodoFilter.vue';

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.list-items {
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

.list-item.not-completed {
  border-left: 6px solid #be123c;
}

.list-item.completed {
  text-decoration: line-through;
  border-left: 6px solid #10b981;
}

.no-todos {
  padding: 3rem 1rem;
  border: 1px dashed #334155;
  border-radius: 8px;
  text-align: center;
  color: #334155;
  font-style: italic;
  font-size: 1.25rem;

}
</style>