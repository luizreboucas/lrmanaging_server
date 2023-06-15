import express from 'express'
import SubcategoriesController from '../controllers/subcategoriesController.js'
const Router = express.Router()

Router
	.get('/subcategories/:id', SubcategoriesController.getSubcategories)
	.get('/subcategories/:id',SubcategoriesController.getSubcategory)

export default Router