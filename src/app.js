import express from 'express'
import config from './config'

import providersRoutes from './routes/providers.routes'

const app = express()

//settings
app.set('port' , config.port)

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//routes
app.use(providersRoutes)


export default app