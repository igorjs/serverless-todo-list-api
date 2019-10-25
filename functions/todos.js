// import { DynamoDB } from 'aws-sdk'
import { success, created, badRequest } from 'utils/response'
import todoService from 'service/todoService'
// const dynamoDb = new DynamoDB.DocumentClient()

/**
 * GET all todo items
 * @param {*} event
 */
export async function list (event) {
  try {
    const todo = await todoService.create('Clean the house')

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
    const todo = await todoService.create('Clean the house')

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
    const todo = await todoService.create('Clean the house')

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
    const todo = await todoService.create('Clean the house')

    return success(todo)
  } catch (err) {
    return badRequest(err.message)
  }
}
