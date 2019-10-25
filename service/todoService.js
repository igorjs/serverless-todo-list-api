import assert from 'assert'
import Todo from 'model/todo'
import { mockData } from 'mock/data'

const list = async () => {
  return mockData
}

const get = async ({ id }) => {
  assert(!!id, 'An ID must be specified!')

  return mockData.find(todo => todo.id === id) ?? {}
}

const create = async ({ id = null, message, due }) => {
  assert(!!message, 'A message must be specified!')

  return new Todo(message, due)
}

const update = async ({ id = null, message, due }) => {
  assert(!!message, 'A message must be specified!')

  return new Todo(message, due)
}

export default { list, get, create, update }
