<template>
  <div class="filter__wrapper">
    <button type="button"
            @click="handleFilter('all')"
            class="filter-btn all-btn"
            :class="filter === 'all' && 'active'">All</button>
    <button type="button"
            @click="handleFilter('completed')"
            class="filter-btn completed-btn"
            :class="filter === 'completed' && 'active'"
            :disabled="filter === 'completed'">Completed</button>
    <button type="button"
            @click="handleFilter('not-completed')"
            class="filter-btn not-completed-btn"
            :class="filter === 'not-completed' && 'active'">Not Completed</button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import { useTodosStore } from '@/stores/todos';

const todoStore = useTodosStore();
const { updateFilter } = todoStore;
const { filter } = storeToRefs(todoStore);

function handleFilter(filterText) {
  updateFilter(filterText);
}
</script>

<style scoped>
.filter__wrapper {
  display: flex;
  justify-content: center;
  background-color: #33415562;
  border-radius: 4px 4px 0 0;
  width: max-content;
  margin: 0 auto;
  overflow: hidden;
}

.light .filter__wrapper {
  background-color: #cbd5e1;
}

.filter-btn {
  border: none;
  background-color: transparent;
  padding: 0.5rem 1rem;
  transition: background-color 0.25s, color 0.25s;
}

:not(.active).filter-btn:hover {
  cursor: pointer;
}

.all-btn {
  color: #fafafa;
}

.all-btn.active {
  background-color: #f8fafc;
  color: #0f172a;
}

.light .all-btn {
  color: #0f172a;
}

.light .all-btn.active {
  background-color: #0f172a;
  color: #f8fafc;
}

.all-btn:hover {
  background-color: #fafafa;
  color: #0f172a;
}

.completed-btn {
  color: #10b981;
}

.light .completed-btn {
  color: #059669;
}

.completed-btn:hover,
.completed-btn.active {
  background-color: #10b981;
  color: #fafafa;
}

.not-completed-btn {
  color: #be123c;
}

.not-completed-btn:hover,
.not-completed-btn.active {
  background-color: #be123c;
  color: #fafafa;
}
</style>