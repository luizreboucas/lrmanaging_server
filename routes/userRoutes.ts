import express, { Request,Response } from 'express'
import UserController from '../controllers/userController.js'

const Router = express.Router()

Router
	.get('/users', UserController.getUsers )
	.get('/:id', UserController.getUser)
	.post('/users', UserController.postUser)
	.put('/users/:id', UserController.updateUser)
	.delete('/users/:id', UserController.deleteUser)

export default Router