import express from 'express'

import predictionRouter from './prediction-routes.js'

const pkg = {
  version: process.env.npm_package_version,
}

const router = new express.Router()

router.use('/prediction', predictionRouter)

router.get('/version', (req, res) => {
  res.status(200).json(pkg.version)
})

export default router
