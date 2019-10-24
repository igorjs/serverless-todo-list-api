// import * as uuid from 'uuid'
// import { DynamoDB } from 'aws-sdk'

// const dynamoDb = new DynamoDB.DocumentClient()

export async function create (event) {
  const response = {
    statusCode: 200,
    body      : JSON.stringify({
      message: `create`,
    }),
  }

  return response
}

export async function list (event) {
  const response = {
    statusCode: 200,
    body      : JSON.stringify({
      message: `list`,
    }),
  }

  return response
}

export async function view (event) {
  const response = {
    statusCode: 200,
    body      : JSON.stringify({
      message: `view`,
    }),
  }

  return response
}

export async function remove (event) {
  const response = {
    statusCode: 200,
    body      : JSON.stringify({
      message: `remove`,
    }),
  }

  return response
}
