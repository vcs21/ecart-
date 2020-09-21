import { Product } from "./product";

export class CartItems {

    id: string;
    name: String;
    imageUrl: String;
    unitPrice: number;
    quantity: number;

    constructor(products:Product){
        this.id = products.id;
        this.name = products.name;
        this.imageUrl = products.image_url;
        this.unitPrice = products.unitPrice;
        this.quantity = 1;

    }

}

