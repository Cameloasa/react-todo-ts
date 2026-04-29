import { api } from './api'

import type { CreateTodoPayload, Todo, UpdateTodoPayload } from '../types/TodosAPI.types'

/**
 * Make a generic HTTP GET request
 *
 * @param endpoint Endpoint to get
 */
export const get = async <T>(endpoint: string) => {
  const response = await api.get<T>(endpoint)
  return response.data
}

/**
 * Make a generic HTTP POST request
 *
 * @param endpoint Endpoint to POST to
 * @param data Payload to POST
 */
export const post = async <Response, Payload>(endpoint: string, data: Payload) => {
  const response = await api.post<Response>(endpoint, data)
  return response.data
}

/**
 * Get todos from API using axios 🤘🏻
 */
export const getTodos = async () => {
  return get<Todo[]>('/todos')
}

/**
 * Get a single todo from the API
 *
 * @param id
 */
export const getTodo = async (id: number) => {
  return get<Todo>(`/todos/${id}`)
}

/**
 * Toggle the done status of a todo
 *
 * @param todo
 */

/**
 * Create a todo in the API using axios 😎
 *
 * @param payload
 */
export const createTodo = async (payload: CreateTodoPayload) => {
  return post<Todo, CreateTodoPayload>('/todos', payload)
}

/**
 * Update a todo in the API
 *
 * @param id
 * @param payload
 */
export const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
  const response = await api.patch<Todo>(`/todos/${id}`, payload)
  return response.data
}

/**
 * Delete a todo from the API
 *
 * @param id
 */
export const deleteTodo = async (id: number) => {
  await api.delete(`/todos/${id}`)
  return true
}
