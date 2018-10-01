import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from '../../providers/cart/cart-item';
import { StorageService } from '../../providers/cart/storage.service';
import { CartService } from '../../providers/cart/cart.service';
import { ProdutoDTO } from '../../providers/produto.dto';
import { UtilProvider } from '../../providers/util/util';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public cartService: CartService,
    public util: UtilProvider
   ) {
  }

  ionViewDidLoad() {
   let cart = this.cartService.getCart();
   this.items = cart.items;
    console.log(cart.items)
  }
  removeItem(produto: ProdutoDTO){
    this.items = this.cartService.removeProduto(produto).items;
  }
  increaseQuantity(produto: ProdutoDTO){
    this.items = this.cartService.increaseQuantity(produto).items;
  }
  decreaseQuantity(produto: ProdutoDTO){
    this.items = this.cartService.decreaseQuantity(produto).items;
  
  }
  // total(): number{
  //   return this.cartService.total();
  // }
  btnGoBack() {
    this.navCtrl.pop();
  }

  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }
}
