import client from '../config/bdConfig.js'
import { Request, Response } from 'express'

export default class SubcategoriesController{
	public static getSubcategories = async(req:Request, res: Response) => {
		try {
			const id = req.params.id
			const subcategories = (await client.query(`SELECT * FROM subcategories WHERE categoryid = '${id}';`)).rows
			res.status(200).json(subcategories)
		} catch (error) {
			res.status(500).json({error})
		}
	}
	public static getSubcategory = async(req:Request, res: Response) => {
		try {
			const id = req.params.id
			const subcategory = (await client.query(`SELECT * FROM subcategories WHERE id = '${id}';`)).rows
			res.status(200).json(subcategory)
		} catch (error) {
			res.status(500).json({error})
		}
	}
    
}