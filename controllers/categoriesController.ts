import client from '../config/bdConfig.js'
import { Request, Response } from 'express'

export default class CategoriesController{
	public static getCategories = async(req:Request, res: Response) => {
		try {
			const categories = (await client.query('SELECT * FROM categories;')).rows
			
			res.status(200).json(categories)
		} catch (error) {
			res.status(500).json({error})
		}
	}
}

