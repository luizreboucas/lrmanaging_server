interface IOperations{
    categoria_id: string,
    subcategoria_id: string,
    descricao: string,
    valor: number
}
export default class Operations{
	private categoria_id
	private subcategoria_id
	private descricao
	private valor

	constructor({categoria_id, subcategoria_id, descricao, valor}: IOperations){
		this.categoria_id = categoria_id
		this.subcategoria_id = subcategoria_id
		this.descricao = descricao
		this.valor = valor
	}
}