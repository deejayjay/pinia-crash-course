import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [],
    theme: 'dark',
    filter: 'all'
  }),
  getters: {
    filteredTodos(store) {
      if (store.filter === 'completed') {
        return store.todos.filter((todo) => todo.isCompleted);
      } else if (store.filter === 'not-completed') {
        return store.todos.filter((todo) => !todo.isCompleted);
      }
      return store.todos;
    }
  },
  actions: {
    // Add a new todo to the list
    addNewTodo(todoText) {
      const newTodo = {
        id: crypto.randomUUID(),
        text: todoText,
        isCompleted: false
      };
      this.todos.push(newTodo);
    },
    // Delete a todo from the list
    deleteTodo(todoId) {
      console.log(`Todo ${todoId} was deleted`);
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
    // Update the status of a todo
    updateTodoStatus(todoId, isCompleted) {
      const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.isCompleted = isCompleted;
      }
    },
    // Toggle the theme
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
    },
    updateFilter(filter) {
      this.filter = filter;
    }
  }
});
