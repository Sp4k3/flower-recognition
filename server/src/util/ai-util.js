import * as fs from 'fs'
import tf from '@tensorflow/tfjs-node'

const labels = ['daisy', 'dandelion', 'rose', 'sunflower', 'tulip']

const imgPath = './images/sunflower.jpg'
const modelUrl = 'file://./flower_models/model_01/model.json'

const imageWidth = 224
const imageHeight = 224

// Convert image to model attempts
const toPixelData = path => {
  const imageBuffer = path ?? fs.readFileSync(imgPath)
  const tfImage = tf.node.decodeImage(imageBuffer)
  const tfResizedImage = tf.image
    .resizeBilinear(tfImage, [imageWidth, imageHeight])
    // .toFloat()
    .div(tf.scalar(255))

  return tfResizedImage
}

// Predict result
const predict = (model, pixelData) => {
  const inputTensor = pixelData.expandDims()
  const prediction = model.predict(inputTensor)
  const scores = prediction.arraySync()[0]

  const maxScore = prediction.max().arraySync()
  const maxScoreIndex = scores.indexOf(maxScore)

  const labelScores = {}

  scores.forEach((s, i) => {
    labelScores[labels[i]] = parseFloat(s.toFixed(4))
  })

  return {
    prediction: `${labels[maxScoreIndex]} (${parseInt(maxScore * 100)}%)`,
    scores: labelScores,
  }
}

// Run model prediction
export const runPrediction = async (imageData) => {
  console.log('Loading model...')
  const model = await tf.loadLayersModel(modelUrl)
  model.summary()

  console.log('Transform image to pixel data...')
  // console.log('imageData : ', imageData)
  const pixeldata = toPixelData(await imageData.buffer)
  // const pixeldata = toPixelData(imgPath)

  console.log('Running prediction...')
  const prediction = predict(model, pixeldata)
  console.log(prediction)
  return prediction
}
