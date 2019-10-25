import { success, created, badRequest } from 'utils/response'
import { parse } from 'utils/request'

import todoService from 'service/todoService'

/**
 * GET all todo items
 * @param {*} event
 */
export async function list (event) {
  try {
    const { payload } = parse(event)

    const todo = await todoService.create({ message: payload.message })

    return success([todo, todo, todo])
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * GET a single todo item via ID
 *
 * @param {*} event
 */
export async function view (event) {
  try {
    const { payload } = parse(event)

    const todo = await todoService.create({ message: payload.message })

    return success(todo)
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * POST a new todo item
 *
 * @param {*} event
 */
export async function create (event) {
  try {
    const { payload } = parse(event)

    const todo = await todoService.create({ message: payload.message })

    return created(todo)
  } catch (err) {
    return badRequest(err.message)
  }
}

/**
 * PATCH / POST an update to an existing todo item via ID
 * @param {*} event
 */
export async function update (event) {
  try {
    const { payload } = parse(event)

    const todo = await todoService.create({ message: payload.message })

    return success(todo)
  } catch (err) {
    return badRequest(err.message)
  }
}
