import client from '../config/bdConfig.js'
import { v4 } from 'uuid'

interface IOperations{
    categoria_id: string,
    subcategoria_id: string | undefined,
    descricao: string,
    valor: number,
	organization_id: string
	
}
export default class Operations{
	private id
	private categoria_id
	private subcategoria_id
	private descricao
	private valor
	private organization_id
	

	constructor({categoria_id, subcategoria_id = '2863f24a-6c14-4741-8ccf-d832675840cf', descricao, valor, organization_id }: IOperations){
		this.id = v4()
		this.categoria_id = categoria_id
		this.subcategoria_id = subcategoria_id
		this.descricao = descricao
		this.valor = valor
		this.organization_id = organization_id
		
	}

	public async save(){
		try {
			const query = await client.query(`INSERT INTO operations (id, categoria_id, subcategoria_id, descricao, valor,  organization_id) VALUES ('${this.id}', '${this.categoria_id}', '${this.subcategoria_id}','${this.descricao}', '${this.valor}','${this.organization_id}');`)
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

	public static async findByOrganization(organization_id: string){
		try {
			const query = await client.query(`SELECT * FROM operations WHERE organization_id = '${organization_id}';`)
			return query.rows
		} catch (error) {
			return {error}
		}
	}
}