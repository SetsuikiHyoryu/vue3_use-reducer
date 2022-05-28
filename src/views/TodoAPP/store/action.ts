import type { Ref } from 'vue'
import type { TodoItem, TodoList } from './types'

export function addTodo(state: Ref<TodoList>, payload: TodoItem) {
  state.value.push(payload)
}

type ID = number

export function toggleTodo(state: Ref<TodoList>, payload: ID) {
  state.value = state.value.map<TodoItem>((item) => {
    item.id === payload && (item.completed = !item.completed)
    return item
  })
}

export function removeTodo(state: Ref<TodoList>, payload: ID) {
  console.log(state.value, payload)
  state.value = state.value.filter(
    (item: TodoItem): boolean => item.id !== payload
  )
}
