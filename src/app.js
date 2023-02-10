import express from 'express'
import config from './config'

import providersRoutes from './routes/providers.routes'

const app = express()

//settings
app.set('port' , config.port)
app.use(providersRoutes)


export default app