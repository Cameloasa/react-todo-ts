// src/types/Todo.ts
export interface Todo {
  id: number
  title: string
  done: boolean
}

export type CreateTodoPayload = Omit<Todo, 'id'>
export type UpdateTodoPayload = Partial<CreateTodoPayload>
export type DeleteTodoPayload = Pick<Todo, 'id'>
