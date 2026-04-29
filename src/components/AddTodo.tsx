import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import type { CreateTodoPayload } from '../types/TodosAPI.types'

// Interface for AddTodo component props
interface AddTodoProps {
  onAdd: (payload: CreateTodoPayload) => Promise<void>
}

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title.trim().length < 2) return

    await onAdd({
      title,
      completed: false,
    })

    setTitle('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <div className="d-flex gap-2">
        <Form.Control
          type="text"
          placeholder="Add a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </div>
    </Form>
  )
}

export default AddTodo
