import express,{ Request,Response } from 'express'
import routes from '../routes/index.js'
import client from '../config/bdConfig.js'
const app = express()
routes(app)

client.connect((err)=>{
	if(err){
		console.log('database error: ' + err)
	}else{
		console.log('database connected')
	}
})


app.listen(3500,()=>{
	console.log(`servidor rodando na porta ${3500}`)
})