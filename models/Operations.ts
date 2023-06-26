import client from '../config/bdConfig.js'
import { v4 } from 'uuid'

interface IOperations{
    categoria_id: string,
    subcategoria_id: string | undefined,
    descricao: string,
    valor: number
}
export default class Operations{
	private id
	private categoria_id
	private subcategoria_id
	private descricao
	private valor

	constructor({categoria_id, subcategoria_id = '', descricao, valor}: IOperations){
		this.id = v4()
		this.categoria_id = categoria_id
		this.subcategoria_id = subcategoria_id
		this.descricao = descricao
		this.valor = valor
	}

	public async save(){
		try {
			const query = await client.query(`INSERT INTO operations(id, categoria_id, subcategoria_id, descricao, valor) VALUES ('${this.id}', '${this.categoria_id}', '${this.subcategoria_id}','${this.descricao}', '${this.valor}');`)
			return query.rows
			
		} catch (error) {
			return {error}
		}
		
	}

	public static async findAll(){
		try {
			const query = await client.query('SELECT * FROM operations;')
			return query.rows
		} catch (error) {
			return error
		}
	}
}