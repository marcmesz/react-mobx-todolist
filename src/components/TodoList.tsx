import { observer } from "mobx-react"
import { useStore } from "../store/useStore"
import { TodoItem } from "./TodoItem"
import { Alert } from "react-bootstrap"

export const TodoList = observer(() => {
  const { todoList } = useStore()

  return (
    <section className="todo-list">
      {!todoList?.length && (
        <Alert
          variant="success"
          className="d-flex align-items-center justify-content-center w-100 mb-0"
        >
          ✅ Well done! There's nothing left to do! 🥳
        </Alert>
      )}
      {(todoList || []).map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </section>
  )
})
