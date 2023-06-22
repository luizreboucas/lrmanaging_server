import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import client from '../config/bdConfig.js'

interface IUser{
    nome: string,
    email: string,
    senha: string
}
//id,nome,email,senha
export default class Users{
	private id
	private nome
	private email
	private senha

	constructor({nome,email,senha}: IUser){
		
		this.id = v4()
		this.nome = nome
		this.email = email
		this.senha = senha
		
	}

	public async hashPassword(){
		const salt = await bcrypt.genSalt()
		this.senha = await bcrypt.hash(this.senha, salt)
	}

	public async save(){
		try {
			await client.query(`INSERT INTO users (id,nome,email,senha) VALUES ('${this.id}','${this.nome}','${this.email}','${this.senha}');`)
			return {
				id: this.id,
				nome: this.nome,
				email: this.email
			}
		} catch (error) {
			return {error}
		}
	}

	public static async findAll(){
		try {
			const query = await client.query('SELECT * FROM users;')
			return query.rows
		} catch (error) {
			return {error}
		}
        
	}

	public static async find(idPassed: string){
		try {
			const query = await client.query(`SELECT * FROM users WHERE id = '${idPassed}' `)
			return query.rows
		} catch (error) {
			return {error}
		}
	}

	public static async delete(idPassed: string){
		try {
			await client.query(`DELETE FROM users WHERE id = '${idPassed}'`)
		} catch (error) {
			return {error}
		}
	}

	public static async findByEmail(email:string){
		try {
			const user = await client.query(`SELECT * FROM users WHERE email = '${email}';`)
			return user.rows[0]
		} catch (error) {
			return error
		}
	}

	public getId(){
		return this.id
	}

	public getNome(){
		return this.nome
	}

	public getSenha(){
		return this.senha
	}
}