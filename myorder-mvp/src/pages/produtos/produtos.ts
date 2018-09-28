import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { BebidaProvider } from "../../providers/bebida/bebida";

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
    // public cartService: CartService,
    public loadingCtrl: LoadingController
   ) {
  }

  ionViewDidLoad(){
    this.bebidas= BebidaProvider.getBebidas();
  }

customizeOrder(produto_id : string) {
  this.navCtrl.push("BuildOrderPage", {produto_id: produto_id});
}

increaseQuantity(produto: BebidaProvider){
  this.bebidas = this.bebidas.increaseQuantity(produto).items;
}
// addToCart(produto: ProdutoDTO)
// {
// this.cartService.addProduto(produto);
// this.navCtrl.setRoot("CartPage");
// }

btnGoBack() {
  this.navCtrl.pop();
}

}
