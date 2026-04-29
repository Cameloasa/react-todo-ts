import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { PacmanLoader } from 'react-spinners'

import AddTodo from '../components/AddTodo'
import TodoListItem from '../components/TodoListItem'

import * as TodosAPI from '../services/TodosAPI'
import type { Todo, CreateTodoPayload } from '../types/TodosAPI.types'

const TodosPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])

  // Load todos from API
  const loadTodos = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API delay
    try {
      const data = await TodosAPI.getTodos()
      setTodos(data)
    } finally {
      setIsLoading(false)
    }
  }

  // Create a new todo
  const createTodo = async (payload: CreateTodoPayload) => {
    setIsLoading(true)
    try {
      await TodosAPI.createTodo(payload)
      await loadTodos()
    } finally {
      setIsLoading(false)
    }
  }

  // Toggle completed state
  const toggleTodo = async (todo: Todo) => {
    setIsLoading(true)
    try {
      await TodosAPI.updateTodo(todo.id, {
        completed: !todo.completed,
      })
      await loadTodos()
    } finally {
      setIsLoading(false)
    }
  }

  // Load todos on mount
  useEffect(() => {
    const fetchData = async () => {
      await loadTodos()
    }

    fetchData()
  }, [])

  return (
    <>
      <h1 className="mb-3">Todos</h1>

      {/* Loading spinner */}
      {isLoading && (
        <div id="loading-spinner-wrapper">
          <PacmanLoader size={30} color="#44f" speedMultiplier={1.25} />
        </div>
      )}

      {/* Todo list */}
      {!isLoading && todos.length > 0 && (
        <ListGroup className="todolist">
          {todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} onToggle={toggleTodo} />
          ))}
        </ListGroup>
      )}

      {/* Add new todo */}
      <div className="mt-4">
        <AddTodo onAdd={createTodo} />
      </div>

      {/* Empty state */}
      {!isLoading && todos.length === 0 && (
        <p className="text-muted">No todos yet. Use the form to add one.</p>
      )}
    </>
  )
}

export default TodosPage
