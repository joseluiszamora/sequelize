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

// POST api/questions
app.post('/', (req, res) => {
  const linea = req.body
  linea._id = +new Date()
  linea.user = {
    email: 'jzamora',
    password: '123456',
    firstname: 'jose luis',
    lastname: 'zamora'
  },
  linea.createdAt = new Date(),
  linea.answers = []

  debug('New Linea')
  debug(linea)
})

export default app
