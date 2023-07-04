import cors from 'cors'
import express,{ Express, Request,Response } from 'express'
import loginRoutes from './loginRoutes.js'
import userRoutes from './userRoutes.js'
import operationsRoutes from './operationsRoutes.js'
import categoryRoutes from './categoryRoutes.js'
import subcategoryRoutes from './subcategoryRoutes.js'
import organizationsRoutes from './organizationsRoutes.js'
import cookieParser from 'cookie-parser'

const Router = express.Router()

const routes = (app: Express) => {
	app.use(cors())
	app.use(cookieParser())
	app.use(express.json())
	app.use(categoryRoutes)
	app.use(subcategoryRoutes)
	app.use(operationsRoutes)
	app.use(organizationsRoutes)
	app.use(loginRoutes)
	app.use(userRoutes)
	
	
}

export default routes