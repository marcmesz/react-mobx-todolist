import { observer } from "mobx-react-lite"
import { BsTrashFill } from "react-icons/bs"
import type { Todo } from "../model/todo.model"
import { useStore } from "../store/useStore"
import { Col, Form, Row } from "react-bootstrap"
import classNames from "classnames"

interface TodoItemProps {
  todo: Todo
}

export const TodoItem = observer(({ todo }: TodoItemProps) => {
  const { removeTodo, updateTodo } = useStore()

  return (
    <Row className="align-items-center px-1 my-2 w-100 mx-0">
      <Col className="px-0 text-start">
        <Form.Check
          type="checkbox"
          className="fs-3"
          name="todoCompleted"
          checked={todo.completed}
          onChange={() => updateTodo(todo.id)}
        />
      </Col>
      <Col xs={9} sm={10} className="px-0">
        <Form.Control
          type="text"
          name="todoTitle"
          value={todo.title}
          onChange={(e) => (todo.title = e.target.value)}
          readOnly={todo.completed}
          disabled={todo.completed}
          className={classNames({
            "text-decoration-line-through opacity-50": todo.completed,
            "pe-none": todo.completed
          })}
        />
      </Col>
      <Col className="px-0 text-end">
        {todo.completed && (
          <BsTrashFill
            role="button"
            className="text-danger fs-3"
            title="Remove Todo"
            onClick={() => removeTodo(todo.id)}
          />
        )}
      </Col>
    </Row>
  )
})
