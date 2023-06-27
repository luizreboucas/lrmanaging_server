import client from '../config/bdConfig.js'
import { Request, Response } from 'express'
import { v4 } from 'uuid'
import bcrypt from 'bcrypt'
import Users from '../models/Users.js'

export default class UserController{
	public static getUsers = async(req: Request, res: Response) => {
		try {
			const users = await Users.findAll()
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json({message: error})
		}
	}

	public static getUser = async(req: Request, res: Response) => {
		try {
			const user = await Users.find(req.params.id)
			res.status(200).json(user)
		} catch (error) {
			
			res.status(500).json({message: error})
		}
	}

	public static postUser = async(req: Request, res: Response) => {
		try {
			const {nome, email,senha,organization_id,is_admin} = req.body
			const newUser = new Users({nome,email,senha,organization_id,is_admin})
			await newUser.hashPassword()
			newUser.save()
			res.status(201).json({message: 'novo usuário criado com sucesso', newUser: Users.find(newUser.getId())})
		} catch (error) {
			res.status(500).json({error})
		}
	}

	public static updateUser = async(req: Request, res: Response) => {
		try {
			const id = req.params.id
			const {nome, email,senhaPlainText} = req.body

			const user = await (await client.query(`SELECT * from categories WHERE id = '${id}';`)).rows[0]
			const salt = await bcrypt.genSalt()
			const updatedUser = {
				nome: nome? nome: user.nome,
				email: email? email: user.email,
				senha: senhaPlainText? await bcrypt.hash(senhaPlainText, salt): user.senha
			}

			const query = await client.query(`UPDATE users SET nome = '${updatedUser.nome}', email = '${updatedUser.email}', senha = '${updatedUser.senha}' WHERE id = '${id}';`)
            
			res.status(200).json(updatedUser)
            
		} catch (error) {
			res.status(500).json({message: error})
		}
	}

	public static deleteUser = async(req: Request, res:Response) => {
		try {
			const id = req.params.id
			await Users.delete(id)
			res.status(200).json({message: 'usuário deletado com sucesso'})
		} catch (error) {
			res.status(500).json({error})
		}
	}
}