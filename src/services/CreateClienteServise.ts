import Client from "../models/Client";
import ClientRepository from "../repositories/ClientsRepository"

export default class CreatClient {

    private repository: ClientRepository;

    constructor(repository: ClientRepository) {
        this.repository = repository;
    }

    //método
    public executeClient({ code, endereco, genero, idade, nome, telefone }: Client): Client{
        const client = this.repository.findByCode(code)
        if(client){
            throw Error("Cliente já cadastrado")
        }else{
            const newClient = new Client({code, endereco, genero, idade, nome, telefone})
            this.repository.save(newClient)
            return newClient
        }

    }
}