import express, { Request,Response } from 'express'

const Router = express.Router()

Router
	.get('/:id', (req: Request, res: Response)=>{
		res.status(200).json({message: 'olá usuário'})
	})