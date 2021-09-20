import { Router } from "express";

import ClientRepository from "../repositories/ClientsRepository";
import CreateClienteServise from "../services/CreateClienteServise";


const clientRouter = Router();
const clientRepository = new ClientRepository()

clientRouter.get('/', (request, response) => {
    response.json(clientRepository.findAll())
})

clientRouter.post('/', (request, response) => {
    try {
        const service = new CreateClienteServise(clientRepository)
        const { code, endereco, genero, idade, nome, telefone, id } = request.body;
        const cliente = service.executeClient({ code, endereco, genero, idade, nome, telefone, id })
        response.status(201).json(cliente)
    } catch (error) {
        return response.status(400).json({ error:"Cliente já cadastrado" })
    }
})

export default clientRouter