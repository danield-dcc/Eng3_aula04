import {Router} from 'express'
import productRouter from './products.routes'
import clientRouter from './clients.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/clients', clientRouter)

export default routes