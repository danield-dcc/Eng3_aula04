import { v4 as uuidv4 } from 'uuid';

export default class Product {
    id: string;
    code: number;
    description: string;
    byPrice: number;
    sellPrice: number;
    tag: Array<Product>;
    lovers: number;

    constructor({ code, description, byPrice, lovers, sellPrice, tag }: Omit <Product, 'id'>) {
        this.id = uuidv4(); //vai ser gerado automaticamente ao se inserir um produto
        this.code = code;
        this.description = description;
        this.byPrice = byPrice;
        this.sellPrice = sellPrice;
        this.tag = tag;
        this.lovers = lovers
    }

    
    
    
    
}