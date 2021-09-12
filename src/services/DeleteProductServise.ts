import Product from "../models/Product";
import ProductRepository from "../repositories/ProductsRepository";

export default class DeletetProduct {
  
    private repository: ProductRepository;

    constructor(repository: ProductRepository) {
        this.repository = repository; 

    }

    public executeDel(code: number): Array<Product> {
        const possuiIndice = this.repository.findByCode(code)
        if (possuiIndice) {
            const product = this.repository.deleteByCode(code)
            return product
        } else {
            throw Error("Produto não pode ser deletato")
        }
    }



}