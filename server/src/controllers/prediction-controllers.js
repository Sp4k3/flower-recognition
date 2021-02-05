import { techLogger } from '../util/logger.js'
import { runPrediction, runTraining } from '../util/ai-util.js'

export const trainModelController = async (req, res) => {
  try {
    await runTraining()
    res.status(200).json({
      // predictionData,
      success: true,
    })
  } catch (error) {
    techLogger.error(error.message)
    res.status(500).json({
      message: error.message,
      success: false,
    })
  }
}

export const getPredictionController = async (req, res) => {
  try {
    const predictionData = await runPrediction(await req.file)
    res.status(200).json({
      predictionData,
      success: true,
    })
  } catch (error) {
    techLogger.error(error.message)
    res.status(500).json({
      message: error.message,
      success: false,
    })
  }
}
