import { techLogger } from '../util/logger.js'
import { runPrediction } from '../util/ai-util.js'

export const getExampleController = async (req, res) => {
  try {
    const predictionData = await runPrediction()
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
