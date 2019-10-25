const corsheaders = {
  'Access-Control-Allow-Origin'     : '*',
  'Access-Control-Allow-Credentials': true,
}

const buildResponse = (statusCode, successState, data, message) => {
  const body = {
    success: successState,
    message: message,
  }

  if (data) {
    if (successState) {
      body.data = data
    } else {
      body.error = data
    }
  }

  return {
    statusCode: statusCode,
    headers   : { ...corsheaders },
    body      : JSON.stringify(body),
  }
}

export const success = (data, message = 'OK') => buildResponse(200, true, data, message)

export const created = (data, message = 'Created') => buildResponse(201, true, data, message)

export const badRequest = (data, message = 'Bad Request') => buildResponse(400, false, data, message)

export const unauthorized = (data, message = 'Unauthorized') => buildResponse(401, false, data, message)

export const forbidden = (data, message = 'Forbidden') => buildResponse(403, false, data, message)

export const exception = (data, message = 'Internal Server Error') => buildResponse(500, false, data, message)
