import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { PacmanLoader } from 'react-spinners'
import TodoListItem from '../components/TodoListItem'
import * as TodosAPI from '../services/TodosAPI'
import type { Todo } from '../services/TodosAPI.types'

const TodosPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [todos, setTodos] = useState<Todo[] | null>(null)

  const toggleTodo = async (todo: Todo) => {
    // set loading state
    setIsLoading(true)

    // update todo in api
    await TodosAPI.updateTodo(todo.id, { completed: !todo.completed })

    // get new list of todos from api
    const data = await TodosAPI.getTodos()
    setTodos(data)

    // reset loading state
    setIsLoading(false)
  }

  // Fetch todos when component is mounted (being rendered for the first time)
  useEffect(() => {
    const getTodos = async () => {
      const data = await TodosAPI.getTodos()
      setIsLoading(false)
      setTodos(data)
    }
    getTodos()
  }, [])

  return (
    <>
      <h1 className="mb-3">Todos</h1>

      {/* Form should validate that a title is entered and at least 2 chars long, ONLY then should the parent's function for creating the todo be called */}
      {/* <AddTodoForm onAdd={createTodo} /> */}

      {/* <SuccessAlert heading="Great success!">
				<ul>
					<li>Such success</li>
					<li>Much great</li>
					<li>Very nice</li>
				</ul>
			</SuccessAlert> */}

      {isLoading && (
        <div id="loading-spinner-wrapper">
          <PacmanLoader size={30} color="#44f" speedMultiplier={1.25} />
        </div>
      )}

      {todos && (
        <ListGroup className="todolist">
          {todos.map((todo) => (
            <TodoListItem key={todo.id} onToggle={toggleTodo} todo={todo} />
          ))}
        </ListGroup>
      )}
    </>
  )
}

export default TodosPage
