import { Injectable } from "../../../node_modules/@angular/core";
import { StorageService } from "./storage.service";
import { Cart } from "./cart";
import { BebidaProvider } from "../bebida/bebida";

@Injectable()
export class CartService{

    constructor(public storage: StorageService){
    }
    createOrClearCart() : Cart {
let cart: Cart = {items:[]};
this.storage.setCart(cart);
return cart; 

    }

    getCart() : Cart {
        let cart: Cart = this.storage.getCart();
        if(cart==null){
            cart = this.createOrClearCart();
        }
        return cart;
    }


    addProduto(produto: BebidaProvider): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto == produto);
        if (position == -1) {
            cart.items.push({ quantidade: 1, produto: produto });
        }
        this.storage.setCart(cart);
        return cart;
    }
}