import cors from 'cors'
import express,{ Express } from 'express'
import loginRoutes from './loginRoutes.js'

const Router = express.Router()

const routes = (app: Express) => {
	app.use(cors())
	app.use(express.json())
	app.use(loginRoutes)
}

export default routes