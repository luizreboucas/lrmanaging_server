import cors from 'cors'
import express,{ Express, Request,Response } from 'express'
import loginRoutes from './loginRoutes.js'
import userRoutes from './userRoutes.js'
import operationsRoutes from './operationsRoutes.js'

const Router = express.Router()

const routes = (app: Express) => {
	app.use(cors())
	app.use(express.json())
	app.use(operationsRoutes)
	app.use(loginRoutes)
	app.use(userRoutes)
}

export default routes