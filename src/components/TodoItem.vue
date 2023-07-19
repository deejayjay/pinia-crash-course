<template>
  <div>{{ todo.text }} - {{ todo.isCompleted ? "Completed" : "Not completed" }}</div>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
});
</script>