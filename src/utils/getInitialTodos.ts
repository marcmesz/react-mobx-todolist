import { nanoid } from "nanoid"
import type { Todo } from "../model/todo.model"

export const getInitialTodos = (): Array<Todo> => [
  {
    id: nanoid(),
    title: "Learn React",
    completed: false
  },
  {
    id: nanoid(),
    title: "Use MobX state management",
    completed: true
  },
  {
    id: nanoid(),
    title: "Create Todo List app",
    completed: false
  }
]
