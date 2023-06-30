import client from '../config/bdConfig.js'
import { v4 } from 'uuid'

interface IOrganization{
    id?: string,
    nome: string
}

export default class Organizations{
	private id
	private nome

	constructor({nome}: IOrganization){
		this.id = v4()
		this.nome = nome
	}

	public async save(){
		try {
			const query = await client.query(`INSERT INTO organizations (id,nome) VALUES ('${this.id}','${this.nome}');`)
			return {
				id: this.id,
				nome: this.nome
			}
		} catch (error) {
			return {error}
		}
	}
	public async find(idPassed: string){
		try {
			const result = await client.query(`SELECT * FROM organizations WHERE id = ${idPassed};`)
			return result
		} catch (error) {
			return {error}
		}
	}

	public static async findAll(){
		try {
			const result = await client.query('SELECT * FROM organizations;')
			return result.rows
		} catch (error) {
			return { error }
		}
	}
}