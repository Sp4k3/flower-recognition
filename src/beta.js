// const fs = require('fs')
// const tf = require('@tensorflow/tfjs-node')
import fs from 'fs'
import tf from '@tensorflow/tfjs-node'

const labels = ['daisy', 'dandelion', 'rose', 'sunflower', 'tulip']

const imgPath = './images/tulip.jpg'
const modelUrl = 'file://./models/model_01/model.json'

const imageWidth = 224
const imageHeight = 224

// Convert image to model attempts
const toPixelData = path => {
  const imageBuffer = fs.readFileSync(path)
  const tfImage = tf.node.decodeImage(imageBuffer)
  const tfResizedImage = tf.image
    .resizeBilinear(tfImage, [imageWidth, imageHeight])
    // .toFloat()
    .div(tf.scalar(255))

  return tfResizedImage
}

// Run the model prediction
const runPrediction = (model, imagepath) => {
  const pixeldata = toPixelData(imagepath)
  const inputTensor = pixeldata.expandDims()
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

// Run
const run = async () => {
  console.log('Loading model...')
  const model = await tf.loadLayersModel(modelUrl)
  model.summary()

  console.log('Running prediction...')
  const prediction = runPrediction(model, imgPath)
  console.log(prediction)
}

run()
