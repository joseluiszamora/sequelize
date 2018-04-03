import express from 'express'
import Debug from 'debug'
// import { required, questionMiddleware } from '../middleware'
// import { question } from '../db-api'
import { handleError } from '../utils'


const app = express.Router()
const debug = new Debug('backend.express:root')

// GET /api/questions
app.get('/', async (req, res) => {
  debug('ooooooooooooooooo')
  try {
    const questions = 'iiiiiiiiiiiii'
    res.status(200).json(questions)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
