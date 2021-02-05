import express from 'express'
import multer from 'multer'

import {
  getPredictionController,
} from '../controllers/prediction-controllers.js'

const router = new express.Router()
// const upload = multer({ dest: 'uploads/' })
const upload = multer()

// router.get('/', getExampleController)
router.post('/', upload.single('file'), getPredictionController)

export default router
