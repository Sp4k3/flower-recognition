import bodyParser from 'body-parser'
import express from 'express'

import routes from './routes/index.js'

import { logHttp } from './util/logger.js'

export const apiPrefix = '/api/v1'

const isTest = process.env.NODE_ENV === 'test'

const app = express()

app.use((req, res, next) => {
  res.header('x-powered-by', 'The World')
  next()
})

if (!isTest) {
  app.use(logHttp)
}

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(apiPrefix, routes)

process.title = 'server-api'

export default app
