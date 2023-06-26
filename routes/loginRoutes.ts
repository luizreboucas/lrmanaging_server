import express from 'express'
import LoginController from '../controllers/loginController.js'

const Router = express.Router()

Router
	.post('/login',LoginController.login)
	.post('/validate',LoginController.validate)
export default Router