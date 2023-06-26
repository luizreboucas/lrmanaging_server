import express from 'express'
import CategoriesController from '../controllers/categoriesController.js'
const Router = express.Router()

Router  
	.get('/categories',CategoriesController.getCategories)
	.post('/categories',CategoriesController.postCategories)

export default Router