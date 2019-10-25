import { success, created, notFound, badRequest } from 'utils/response'
import { parse } from 'utils/request'

import todoService from 'service/todoService'

/**
 * GET all todo items
 * @param {*} event
 */
export const list = async () => {
  try {
    const todos = await todoService.list()

    return success(todos, `${todos.length} records found`)
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * GET a single todo item via ID
 *
 * @param {*} event
 */
export const view = async (event) => {
  try {
    const { params } = parse(event)

    const todo = await todoService.get(params)

    return todo.id ? success(todo, 'Record found') : notFound(todo, 'Record not found')
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * POST a new todo item
 *
 * @param {*} event
 */
export const create = async (event) => {
  try {
    const { payload } = parse(event)

    const todo = await todoService.create({ message: payload?.message, due: payload?.due })

    return created(todo, 'Record created')
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * POST an update to an existing todo item via ID
 * @param {*} event
 */
export const update = async (event) => {
  try {
    const { params, payload } = parse(event)

    const todo = await todoService.update({ id: params?.id, message: payload?.message, due: payload?.due })

    return success(todo, 'Record updated')
  } catch (err) {
    return badRequest(err.message)
  }
}
