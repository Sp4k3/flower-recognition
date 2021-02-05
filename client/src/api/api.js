import { apiClient } from './xhr-client'

export async function getPrediction (imageData) {
  // console.log(imageData)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  const response = await apiClient.post('/prediction', await imageData, config)
  return response?.data.predictionData
}

export async function trainModel () {
  const response = await apiClient.get('/prediction')
  return response?.data
}
