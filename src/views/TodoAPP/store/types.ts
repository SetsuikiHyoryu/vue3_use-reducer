export interface TodoItem {
  // timestamp
  id: number
  content: string
  completed: boolean
}

export type TodoList = TodoItem[]
