<script lang="ts">
export default { name: 'TodoForm' }
</script>

<script setup lang="ts">
import type { TodoItem } from './store/types'
import { ref, defineEmits } from 'vue'

interface Emits {
  (event: 'add-todo', payload: TodoItem): void
}

const emit = defineEmits<Emits>()

const todoContent = ref<string>('')

function addTodoItem(): void {
  emit('add-todo', {
    id: new Date().getTime(),
    content: todoContent.value,
    completed: false,
  })

  todoContent.value = ''
}
</script>

<template>
  <div id="TodoForm">
    <input type="text" v-model="todoContent" @keypress.enter="addTodoItem" />
    <button type="button" @click="addTodoItem">add</button>
  </div>
</template>
