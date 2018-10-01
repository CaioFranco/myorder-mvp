import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { BebidaProvider } from "../../providers/bebida/bebida";
import { CartService } from "../../providers/cart/cart.service";
import { ProdutoDTO } from "../../providers/produto.dto";
// import { CartService } from "../../providers/cart/cart.service";

@IonicPage()
@Component({
  selector: "page-produtos",
  templateUrl: "produtos.html",
})
export class ProdutosPage {
  public imgOrder: string;
  public order = {
    name: null,
    edit: false,
    itens: []
  }
  public bebidas;
  categoria: any;
  orderItems: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cartService: CartService,
    public loadingCtrl: LoadingController
   ) {
  }

  ionViewDidLoad(){
    this.bebidas= BebidaProvider.getBebidas();
  }

customizeOrder(produto_id : string) {
  this.navCtrl.push("BuildOrderPage", {produto_id: produto_id});
}

addToCart(produto: ProdutoDTO)
{

  if(produto.quantidade === 0)
  {
this.cartService.addProduto(produto);
  }
else{
  this.cartService.increaseQuantity(produto);
}
produto.quantidade++;
}
decreaseQuantity(produto: ProdutoDTO){
  if(produto.quantidade !== 0)
  {
    produto.quantidade--;
    this.cartService.decreaseQuantity(produto).items;
  }
}

finish(item: any)
{
this.navCtrl.setRoot("CartPage");
}

btnGoBack() {
  this.navCtrl.pop();
}

}
