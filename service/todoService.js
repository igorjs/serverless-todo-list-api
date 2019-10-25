import assert from 'assert'
import Todo from 'model/todo'
import db from 'data/db'

const list = async () => {
  return db.todos
}

const get = async ({ id }) => {
  assert(!!id, 'An ID must be specified!')

  return db.todos.find(todo => todo.id === id) ?? {}
}

const create = async ({ message, due }) => {
  assert(!!message, 'A message must be specified!')

  const todo = new Todo(message, due)

  db.todos.push(todo) // eslint-disable-line fp/no-mutating-methods

  return todo
}

const update = async ({ id, message, due }) => {
  assert(!!id, 'An ID must be specified!')
  assert(!!message, 'A message must be specified!')

  const todo = db.todos.find(t => t.id === id)

  if (!todo) throw new Error('Record not found in the database')

  const todos = db.todos.filter(t => todo.id !== id)

  const newTodo = { ...todo, due: due ?? todo.due, message }

  todos.push(newTodo) // eslint-disable-line fp/no-mutating-methods

  db.todos = todos

  return newTodo
}

export default { list, get, create, update }
