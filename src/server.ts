import express,{ Request,Response } from 'express'
import routes from '../routes/index.js'
const app = express()
routes(app)


app.listen(3500,()=>{
	console.log(`servidor rodando na porta ${3500}`)
})