import express from 'express'
import multer from 'multer'

import {
  trainModelController,
  getPredictionController,
} from '../controllers/prediction-controllers.js'

const router = new express.Router()
// const upload = multer({ dest: 'uploads/' })
const upload = multer()

router.get('/', trainModelController)
router.post('/', upload.single('file'), getPredictionController)

export default router
