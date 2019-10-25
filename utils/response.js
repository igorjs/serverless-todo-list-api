const corsheaders = {
  'Access-Control-Allow-Origin'     : '*',
  'Access-Control-Allow-Credentials': true,
}

const buildResponse = (statusCode, success, data, status) => {
  const body = { success, status }

  if (data) {
    if (status) {
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

export const success = (data, status = 'OK') => buildResponse(200, true, data, status)

export const created = (data, status = 'Created') => buildResponse(201, true, data, status)

export const badRequest = (data, status = 'Bad Request') => buildResponse(400, false, data, status)

export const unauthorized = (data, status = 'Unauthorized') => buildResponse(401, false, data, status)

export const forbidden = (data, status = 'Forbidden') => buildResponse(403, false, data, status)

export const notFound = (data, status = 'Not Found') => buildResponse(403, false, data, status)

export const exception = (data, status = 'Internal Server Error') => buildResponse(500, false, data, status)
