import type { Action } from '@/hooks/useReducer'
import type { TodoList } from './types'
import type { Ref } from 'vue'

import { addTodo, removeTodo, toggleTodo } from './action'
import actionTypes from './actionTypes'

export function todoReduser(state: Ref<TodoList>, action: Action) {
  const { type, payload }: Action = action

  const actionMap = new Map<string, Function>([
    [actionTypes.ADD_TODO, addTodo],
    [actionTypes.TOGGLE_TODO, toggleTodo],
    [actionTypes.REMOVE_TODO, removeTodo],
  ])

  actionMap.get(type)?.(state, payload)
}
