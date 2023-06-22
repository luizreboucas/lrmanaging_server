import { Request, Response } from 'express'
import { v4 } from 'uuid'
import client from '../config/bdConfig.js'
import Operations from '../models/Operations.js'

export default class OperationsController{
	public static postOperation = async(req: Request,res: Response) => {
		try {
			const { 
				categoria_id,
				subcategoria_id,
				descricao,
				valor, 
			} = req.body
			const newOne = new Operations({categoria_id,subcategoria_id,descricao,valor})
			const response = await newOne.save()
			
			res.status(201).json({message: 'operação cadastrada com sucesso!', response})
		} catch (error) {
			res.status(500).json({error})
		}
	}
	public static getOperations = async(req:Request, res:Response) => {
		try {
			const operations = await Operations.findAll()
			res.status(200).json({operations})
		} catch (error) {
			res.status(500).json({error})
		}   
	}
}