import { Injectable } from "../../../node_modules/@angular/core";
import { StorageService } from "./storage.service";
import { Cart } from "./cart";
import { BebidaProvider } from "../bebida/bebida";
import { ProdutoDTO } from "../produto.dto";

@Injectable()
export class CartService {

    constructor(public storage: StorageService) {
    }
    createOrClearCart(): Cart {
        let cart: Cart = { items: [] };
        this.storage.setCart(cart);
        return cart;

    }

    getCart(): Cart {
        let cart: Cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    }


    addProduto(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position == -1) {
            cart.items.push({ quantidade: 1, produto: produto, src:"0"});
        }
        this.storage.setCart(cart);
        console.log(cart.items);
        return cart;
    }
    addPizza(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position == -1) {
            cart.items.push({ quantidade: 1, produto: produto, src: produto.src});

        } 
        this.storage.setCart(cart);
        return cart;

    }

    total(): number {
        let cart = this.getCart();
        let sum = 0;
        console.log("totalera");
        for (var i = 0; i < cart.items.length; i++) {
            sum += cart.items[i].produto.preco * cart.items[i].quantidade;
        }
        return sum;
    }

    increaseQuantity(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    }
    removeProduto(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    }
    decreaseQuantity(produto: ProdutoDTO): Cart {
        let cart = this.getCart();
        let position = cart.items.findIndex(x => x.produto.id == produto.id);
        if (position != -1) {
            cart.items[position].quantidade--;
            if (cart.items[position].quantidade < 1) {
                cart = this.removeProduto(produto);
            }
        }
        this.storage.setCart(cart);
        return cart;
    }
}