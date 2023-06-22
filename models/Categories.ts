import {v4 } from 'uuid'
import client from '../config/bdConfig.js'

interface ICategories{
    nome: string
}

export default class Categories{
	private id
	private nome

	constructor({nome}:ICategories){
		this.id = v4()
		this.nome = nome
	}

	public save = async() => {
		try {
			const result = await client.query(`INSERT INTO categories (id,nome) VALUES ('${this.id}','${this.nome}')`)
			return result.rows
		} catch (error) {
			return {error}
		}
	}

	public static findAll = async() => {
		try {
			const result = await client.query('SELECT * FROM categories;')
			return result.rows
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
}