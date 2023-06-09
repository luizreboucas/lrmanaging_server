import express from 'express'
import OrganizationsController from '../controllers/organizationsController.js'
const Router = express.Router()

Router
	.get('/organizations', OrganizationsController.getOrganizations)
	.post('/organizations',OrganizationsController.postOrganization)
	

export default Router