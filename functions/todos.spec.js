/* eslint-disable */

import * as handler from './todos'

test('GET all todo items', async () => {
  const event = 'event'
  const context = 'context'
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200)
  };

  await handler.list(event, context, callback)
})

test('GET a single todo item via ID', async () => {
  const event = { pathParameters: { id: '05862d73-c9f2-446e-9324-62044a49ae51' } }
  const context = 'context'
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200)
    expect(response.data.id).not.toBeNull()
  };

  await handler.view(event, context, callback)
})

test('POST a new todo item', async () => {
  const event = { body: { message: 'hello from jest' } }
  const context = 'context'
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(201)
    expect(response.data.id).not.toBeNull()
    expect(response.data.message).toEqual(event.pathParameters.message)
  };

  await handler.create(event, context, callback)
})

test('POST an update to an existing todo item via ID', async () => {
  const event = {
    pathParameters: {
      id: '05862d73-c9f2-446e-9324-62044a49ae51',
      message: 'hello from jest',
    },
  }
  const context = 'context'
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200)
    expect(response.data.id).toEqual(event.pathParameters.id)
    expect(response.data.message).toEqual(event.pathParameters.message)
  };

  await handler.update(event, context, callback)
})
