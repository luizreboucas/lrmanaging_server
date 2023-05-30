import pg from 'pg'

const client = new pg.Client({
	user: 'postgres',
	password: 'postgres',
	database: 'luigelatto',
	port: 5432,
	host: 'localhost'
})


export default client


