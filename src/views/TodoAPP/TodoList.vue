<script lang="ts">
export default { name: 'TodoList' }
</script>

<script setup lang="ts">
import type { TodoList } from './store/types'

import { defineProps } from 'vue'

interface Props {
  todoList: TodoList
}

defineProps<Props>()

interface Emits {
  (event: 'toggle-todo', id: number): void
  (event: 'remove-todo', id: number): void
}

const emit = defineEmits<Emits>()

function toggleTodoItem(id: number): void {
  emit('toggle-todo', id)
}

function removeTodoItem(id: number): void {
  emit('remove-todo', id)
}
</script>

<template>
  <ul id="todo-list">
    <li v-for="item in todoList" :key="item.id">
      <a
        @click="() => toggleTodoItem(item.id)"
        :style="{ textDecoration: item.completed ? 'line-through' : 'none' }"
      >
        {{ item.content }}
      </a>

      <button type="button" @click="() => removeTodoItem(item.id)">
        remove
      </button>
    </li>
  </ul>
</template>

<style scope>
#todo-list {
  margin: 0;
  padding: 0;
}

#todo-list li {
  display: flex;
  list-style: none;
}

#todo-list button {
  margin: 0 0 0 0.5rem;
}
</style>
