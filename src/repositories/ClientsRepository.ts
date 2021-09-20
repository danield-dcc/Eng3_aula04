import Client from "../models/Client";

export default class ClientRepository {
    //salvando os elementos como um Array
    clients: Array<Client>;

    constructor() {
        this.clients = []
    }

    public findByCode(code: number): Client | undefined {
        return this.clients.find(v => v.code == code)
    }

    public findAll(): Array<Client> {
        return this.clients
    }

    //recebe atráves de uma desestruturação
    public save({ code, endereco, genero, idade, nome, telefone }: Client): Client {

        const client = new Client({ code, endereco, genero, idade, nome, telefone })
        this.clients.push(client)
        return client
    }

}