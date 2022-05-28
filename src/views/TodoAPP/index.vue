<script lang="ts">
export default { name: 'TodoAPP' }
</script>

<script setup lang="ts">
import TodoListVue from './TodoList.vue'
import TodoForm from './TodoForm.vue'

import type { TodoItem, TodoList } from './store/types'

import { useReducer } from '@/hooks'
import { todoReduser } from './store/reducer'
import { actionTypes } from './store'

const [todoList, todoDispatch] = useReducer<TodoList>(todoReducer, [])

function addTodo(todo: TodoItem) {
  todoDispatch({ type: actionTypes.ADD_TODO, payload: todo })
}

function toggleTodo(id: number) {
  todoDispatch({ type: actionTypes.TOGGLE_TODO, payload: id })
}

function removeTodo(id: number) {
  todoDispatch({ type: actionTypes.REMOVE_TODO, payload: id })
}
</script>

<template>
  <div id="todo-app">
    <TodoForm @add-todo="addTodo" />

    <TodoListVue
      class="todo-list"
      :todo-list="todoList"
      @toggle-todo="toggleTodo"
      @remove-todo="removeTodo"
    />
  </div>
</template>

<style scope>
#todo-app {
  height: 100%;
  padding: 2rem;
}

.todo-list {
  margin: 1rem 0 0 !important;
}
</style>
