import { Request, Response } from 'express'
import { v4 } from 'uuid'
import client from '../config/bdConfig.js'

export default class OperationsController{
	public static postOperation = async(req: Request,res: Response) => {
		try {
			const id = v4()
			const { 
				categoria_id,
				subcategoria_id,
				descricao,
				valor, 
			} = req.body
			const newOperation = await client.query(`INSERT INTO operations(id, categoria_id, subcategoria_id, descricao, valor) VALUES ('${id}', '${categoria_id}', '${subcategoria_id}','${descricao}', '${valor}');`)
			res.status(201).send('operação cadastrada com sucesso!')
		} catch (error) {
			res.status(500).json({error})
		}
	}
	public static getOperations = async(req:Request, res:Response) => {
		try {
			const operations = (await client.query('SELECT * FROM operations;')).rows
			res.status(200).json({operations})
		} catch (error) {
			res.status(500).json({error})
		}   
	}
}