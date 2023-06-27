import Organizations from '../models/Organizations.js'
import { Request, Response } from 'express'

export default class OrganizationsController{

	public static postOrganization = async(req: Request, res: Response) => {
		try {
			const {nome} = req.body
			const organization = new Organizations({nome})
			const result = await  organization.save()
			res.status(200).json(result)
		} catch (error) {
			res.status(500).json({error})
		}
	}
}