import express from 'express'
import Debug from 'debug'
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

const User = sequelize.define('usuario', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
  ,
  address: {
    type: Sequelize.STRING
  }
});

// force: true will drop the table if it already exists
User.sync({force: true}).then(() => {
  // Table created
  return User.create({ firstName: 'John', lastName: 'Hancock', address: 'Villa 1' });
});

/* sequelize.authenticate()
.then(() => {
  debug('Connection has been established successfully.')
})
.catch(err => {
  debug('Unable to connect to the database:', err)
}) */

// GET /api/questions
app.get('/', async (req, res) => {
  User.findAll().then(users => {
    res.status(200).json(users)
  })
})

export default app
