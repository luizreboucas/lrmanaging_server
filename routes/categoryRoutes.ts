import express from 'express'
import CategoriesController from '../controllers/categoriesController.js'
const Router = express.Router()

Router  
	.get('/categories',CategoriesController.getCategories)

export default Router