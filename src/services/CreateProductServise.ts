import Product from "../models/Product";
import ProductRepository from "../repositories/ProductsRepository";

export default class CreatProduct {
    //o serviço manipula os dados do repositorio neste private reposiory
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository; // o private repository recebe os dados que estão salvos em ProductRepository 
    }

    //boas práticas: que o servise possuia um único método
    public execute({ byPrice, code, description, lovers, sellPrice, tag
    }: Product): Product {
        const product = this.repository.findByCode(code)
        if (product) {
            throw Error("Produto já cadastrado")
        } else {
            const p = new Product({
                byPrice,
                code,
                description,
                lovers,
                sellPrice,
                tag
            })
            this.repository.save(p)
            return p
        }
    }


    // public runCreatProduct(code: number, description: string, byPrice: number, lovers: number, sellPrice: number, tag: Array<Product>, id:number): any {
    //     const product = this.repository.findByCode(code)
    //     if (product) {
    //         throw Error("Produto já cadastrado")
    //     } else {
    //         const p = new Product({
    //             byPrice,
    //             code,
    //             description,
    //             lovers,
    //             sellPrice,
    //             tag,
                

    //         })
    //         this.repository.save(p)
    //         return p
    //     }
    // }

}

