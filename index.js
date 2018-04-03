import http from 'http'
import Debug from 'debug'
import app from './app'
import env from './config/env'

const debug = new Debug('backend.express:root')

async function start() {
  app.listen(env.PORT, () => {
  	debug(`Server running at port ${env.PORT}`)
  })
}

start()
