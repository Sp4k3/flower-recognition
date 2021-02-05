import axios from 'axios'

export const xhrClient = axios.create()

export const apiClient = axios.create({
  baseURL: '/api/v1',
})

apiClient.defaults.timeout = 5000

apiClient.interceptors.response.use(
  response => {
    const isSuccess = response?.data?.success
    if (!isSuccess) {
      const message = response?.data?.message || 'Oups ! An error has occured…'
      const messages = response?.data?.messages
      const error = new Error(message)
      error.messages = messages
      return Promise.reject(error)
    }
    return Promise.resolve(response)
  },
  error => {
    const response = error?.response
    const isUnauthorized = response?.status === 401
    if (isUnauthorized) {
      const customError = new Error('Incorrect authentication, you have to log in again')
      customError.httpCode = 401
      return Promise.reject(customError)
    }
    if (error?.code === 'ECONNABORTED' || error?.message?.includes('Network Error')) {
      const customError = new Error('Unable to communicate with the server')
      return Promise.reject(customError)
    }
    const apiError = new Error(response?.data?.message || response?.statusText || error?.message)
    apiError.statusCode = response?.status
    return Promise.reject(apiError)
  },
)
