import { Container } from "react-bootstrap"
import "./App.css"
import { AddTodoItem } from "./components/AddTodoItem"
import { TodoList } from "./components/TodoList"

export const App = () => {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-center align-items-center">
      <Container className="container d-flex flex-column justify-content-center align-items-center bg-light rounded-4 p-3">
        <TodoList />
        <AddTodoItem />
      </Container>
    </div>
  )
}
