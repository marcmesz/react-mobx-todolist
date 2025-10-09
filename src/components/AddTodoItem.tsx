import { observer } from "mobx-react"
import { useCallback, useState } from "react"
import { useStore } from "../store/useStore"
import { Form, Button, Row, Col } from "react-bootstrap"

export const AddTodoItem = observer(() => {
  const { addTodo } = useStore()
  const [newTodo, setNewTodo] = useState("")

  const handleAddTodo = useCallback(() => {
    const newItem = newTodo.trim()
    if (!newItem?.length) {
      return
    }

    addTodo(newItem)
    setNewTodo("")
  }, [addTodo, newTodo])

  const handleKeyUp = useCallback(
    (key: string) => {
      if (key === "Enter") {
        handleAddTodo()
      }
    },
    [handleAddTodo]
  )

  return (
    <Row className="d-flex mt-2 w-100">
      <Col sm={8} className="px-0 pe-sm-2">
        <Form.Control
          type="text"
          placeholder="Add new Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyUp={(e) => handleKeyUp(e.key)}
        />
      </Col>
      <Col sm={4} className="mt-2 mt-sm-0 px-0">
        <Button
          variant="primary"
          className="w-100"
          disabled={!newTodo.trim().length}
          onClick={handleAddTodo}
        >
          Add Todo
        </Button>
      </Col>
    </Row>
  )
})
