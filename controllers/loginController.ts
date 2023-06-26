import { Request,Response } from 'express'
import Users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { load } from 'ts-dotenv'
const env = load({
	SECRET: String
})

export default class LoginController{
	public static login = async(req:Request, res:Response) => {
		try {
			const {email,senha} = req.body
			const user = await Users.findByEmail(email)
			console.log('logou')
			if(!user){
				res.status(403).send('email ou senha incorretos')
			}
			const checaSenha = await bcrypt.compare(senha, user.senha)
			if(checaSenha){
				const token = await jwt.sign(user.id, env.SECRET)
				
				res.status(200).json({token})
			}else{
				res.status(403).send('email ou senha incorretos')
			}
			
		} catch (error) {
			res.status(500).json({message: 'deu ruim'})
		}
	}
}