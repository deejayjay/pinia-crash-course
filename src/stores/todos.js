import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: []
  }),
  actions: {
    addNewTodo(todoText) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: todoText,
        isCompleted: false
      };
      this.todos.push(newTodo);
    },
    deleteTodo(todoId) {
      console.log(`Todo ${todoId} was deleted`);
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }
  }
});
