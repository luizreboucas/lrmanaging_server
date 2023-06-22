import { Request,Response } from 'express'
import Users from '../models/Users.js'
import bcrypt from 'bcrypt'

export default class LoginController{
	public static login = async(req:Request, res:Response) => {
		try {
			const {email,senha} = req.body
			const user =await  Users.findByEmail(email)
			if(await bcrypt.compare(senha, user.getSenha())){
				res.status(200).send('deu certo')
			}else{
				res.send(500).send('senha errada')
			}
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json({message: 'deu ruim'})
		}
	}
}