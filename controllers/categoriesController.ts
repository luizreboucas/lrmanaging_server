import client from '../config/bdConfig.js'
import { Request, Response } from 'express'
import Categories from '../models/Categories.js'

export default class CategoriesController{
	public static getCategories = async(req:Request, res: Response) => {
		try {
			const categories =  await Categories.findAll()
			res.status(200).json(categories)
		} catch (error) {
			res.status(500).json({error})
		}
	}
	public static postCategories = async(req:Request, res: Response) => {
		try {
			const category = new Categories({nome: req.body.nome})
			category.save()
			res.status(200).json(category)
		} catch (error) {
			res.status(500).json({error})
		}
	}
}

