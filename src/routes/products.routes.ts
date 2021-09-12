import { Router } from "express";
import Product from "../models/Product";
import ProductRepository from "../repositories/ProductsRepository";
import CreateProductServise from "../services/CreateProductServise";
import DeleteProductServise from "../services/DeleteProductServise";


const productRouter = Router();
const productRepository = new ProductRepository()

productRouter.get('/', (request, response) => {
    response.json(productRepository.findAll())
})

productRouter.post('/', (request, response) => {
    try {
        //chama o createProduct que vai encaminahr os dados para o repositório
        const service = new CreateProductServise(productRepository)
        const { byPrice, code, description, lovers, sellPrice, tag, id } = request.body;
        const protuto = service.execute({ byPrice, code, description, lovers, sellPrice, tag, id })
        response.status(201).json(protuto)
    } catch (error) {
        return response.status(400).json({ error: "Produto já cadastrado" })
    }
})

productRouter.delete('/delete/:code', (request, response) => {
    try {
        const service = new DeleteProductServise(productRepository)
        const code1 = +request.params.code;
        const produto = service.executeDel(code1)
        response.status(201).json({produto:"produto deletado"})
    } catch (error) {
        return response.status(400).json({ msg:"Produto não encontrado" })
    }
   

})

export default productRouter