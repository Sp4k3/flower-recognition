import http from 'http'

import { getPort, startServer, handleExit, DEFAULT_PORT } from './server.js'
import { techLogger } from './util/logger.js'

jest.mock('http')
jest.mock('./app.js')
jest.mock('./util/logger.js')

describe('Server', () => {
  beforeEach(() => {
    techLogger.error.mockClear()
    http.createServer.mockClear()
  })

  it(`Should return ${DEFAULT_PORT}`, () => {
    // When
    const port = getPort()

    // Then
    expect(port).toBe(DEFAULT_PORT)
  })

  it('Should call process.on 4 times', () => {
    // Given
    const processOn = jest.spyOn(process, 'on')

    // When
    handleExit()

    // Then
    expect(processOn.mock.calls).toHaveLength(4)
  })

  it('Should getConnection', async () => {
    // When
    await startServer().catch(error => console.warn(error))

    // Then
    expect(http.createServer.mock.calls).toHaveLength(1)
  })

  it('Should throw error', async () => {
    // When
    await startServer().catch(error => console.warn(error))

    // Then
    expect(http.createServer.mock.calls).toHaveLength(0)
  })
})
