import { makeAutoObservable } from "mobx"
import { nanoid } from "nanoid"
import { getInitialTodos } from "../utils/getInitialTodos"
import type { Todo } from "../model/todo.model"

class Store {
  todoList: Array<Todo> = []

  constructor() {
    makeAutoObservable(this)
    this.todoList = getInitialTodos()
  }

  addTodo = (newTodo: Todo["title"]) => {
    this.todoList.push({
      id: nanoid(),
      title: newTodo,
      completed: false
    })
  }

  removeTodo = (id: Todo["id"]) => {
    this.todoList = this.todoList.filter((todo) => todo.id !== id)
  }

  updateTodo = (id: Todo["id"]) => {
    const todoItem = this.todoList.find((todo) => todo.id === id)
    if (todoItem) {
      todoItem.completed = !todoItem.completed
    }
  }
}

export const store = new Store()
