/* eslint-disable */
import todoService from 'service/todoService'

test('list', async () => {
  const todos = await todoService.list()
  expect(Array.isArray(todos)).toBe(true)
})

test('get', async () => {
  const id = '05862d73-c9f2-446e-9324-62044a49ae51'
  const message = 'Clean the house 1'

  const todo = await todoService.get({ id })

  expect(todo.id).toEqual(id)
  expect(todo.message).toEqual(message)
})

test('create', async () => {
  const message = 'Clean the house 6'

  const todo = await todoService.create({ message })

  expect(todo.id).toBeDefined()
  expect(todo.message).toMatch(message)
})

test('update', async () => {
  const id = '05862d73-c9f2-446e-9324-62044a49ae51'
  const message = 'Clean the house 7'

  const todo = await todoService.update({ id, message })

  expect(todo.id).toEqual(id)
  expect(todo.message).toMatch(message)
})
