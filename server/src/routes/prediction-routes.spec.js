import bodyParser from 'body-parser'
import request from 'supertest'
import express from 'express'

import predictionRouter from './prediction-routes.js'
// import { repeatFn } from '../__tests__/fp-util.js'

describe('Router', () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(predictionRouter)

  it('Should return a prediction', async () => {
    // When
    const response = await request(app)
      .post('/')
      .expect('content-type', /^application\/json/)
      .expect(200)

    // Then
    expect(response.body).toHaveProperty('success', true)
    expect(response.body.predictionData).toBeDefined()
  })
})
