import express from 'express'
import Debug from 'debug'
import { handleError } from '../utils'

const app = express.Router()
const debug = new Debug('backend.express:root')

// GET /api/linea
app.get('/', async (req, res) => {
  try {
    const lineas = 'listado de lineas'
    res.status(200).json(lineas)
  } catch (error) {
    handleError(error, res)
  }
})

export default app
