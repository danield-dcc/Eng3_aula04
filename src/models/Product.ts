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
  
     
    //  public get code():number{
    //      return this._code
    //  }
    //  public get description():string{
    //      return this._description
    //  }
    //  public get byPrice():number{
    //      return this._byPrice
    //  }
    //  public get sellPrice():number{
    //      return this._sellPrice
    //  }
    //  public get lovers():number{
    //      return this._lovers
    //  }
    //  public get tag():Array<Product>{
    //      return this._tag
    //  }
  
     
    //  public set code(code: number){
    //      this._code = code;
    //  }
  
    //  public set description(description: string){
    //      this._description = description;
    //  }
  
    //  public set byPrice(byPrice: number){
    //      this._byPrice = byPrice;
    //  }
  
    //  public set lovers(lovers: number){
    //      this._lovers = lovers;
    //  }
  
    //  public set sellPrice(sellPrice: number){
    //      this._sellPrice = sellPrice;
    //  }
  
    //  public set tag(tag: Array<Product>){
    //      this._tag = tag;
    //  }
 

    
    
    
    
}