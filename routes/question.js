import express from 'express'
import Debug from 'debug'
// import { required, questionMiddleware } from '../middleware'
// import { question } from '../db-api'
import { handleError } from '../utils'
const Sequelize = require('sequelize')


const sequelize = new Sequelize('proyectos', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

})

const app = express.Router()
const debug = new Debug('backend.express:root')

/* sequelize.authenticate()
.then(() => {
  debug('Connection has been established successfully.')
})
.catch(err => {
  debug('Unable to connect to the database:', err)
}) */

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
