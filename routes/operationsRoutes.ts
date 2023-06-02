import express from 'express'
import OperationsController from '../controllers/operationsController.js'

const Router = express.Router()

Router
	.post('/operations', OperationsController.postOperation)
	.get('/operations', OperationsController.getOperations)
export default Router