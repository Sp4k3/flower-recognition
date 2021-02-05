import { apiClient } from './xhr-client'
import {
  getExample,
} from './api'

jest.spyOn(apiClient, 'get')

describe('api', () => {
  beforeEach(() => {
    apiClient.get.mockClear()
  })

  it('Should GET example', async () => {
    // Given
    apiClient.get.mockReturnValueOnce(Promise.resolve({ data: { success: true } }))

    // When
    await getExample()

    // Then
    expect(apiClient.get).toHaveBeenCalled()
    expect(apiClient.get).toHaveBeenCalledTimes(1)
    expect(apiClient.get.mock.calls[0][0]).toBe('/prediction')
  })
})
