import dotenv from 'dotenv'
import http from 'http'

import app from './app.js'
import { techLogger } from './util/logger.js'

export const DEFAULT_PORT = 4000

const port = getPort()
startServer(port)

export async function startServer (port) {
  http.createServer(app).listen(port, '0.0.0.0')
  techLogger.info(`server running at http://localhost:${port}`)
}

export function getPort () {
  dotenv.config()
  const port = process.env.SERVER_API_PORT || DEFAULT_PORT
  return +port
}
