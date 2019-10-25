export const parseBody = (event) => {
  return JSON.parse(event?.body) ?? {}
}

export const parsePathParameters = (event) => {
  return event?.pathParameters ?? {}
}

export const parseQueryStringParameters = (event) => {
  return event?.queryStringParameters ?? {}
}

export const parse = (event) => {
  const body = parseBody(event)
  const pathParams = parsePathParameters(event)
  const queryParams = parseQueryStringParameters(event)

  return {
    params : { ...pathParams, ...queryParams },
    payload: body,
  }
}
