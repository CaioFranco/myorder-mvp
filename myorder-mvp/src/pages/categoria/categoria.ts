import { Order } from './../../model/order';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UtilProvider } from "../../providers/util/util";

@IonicPage()
@Component({
  selector: "page-categoria",
  templateUrl: "categoria.html",
})
export class CategoriaPage {

  items: any[] = [];

  pizzaImg: string = "../../assets/imgs/pizzas/frango-catupiry.png";
  refriImg: string = "../../assets/imgs/bebida.png";
  sobremesaImg: string = "../../assets/imgs/sobremesa.png";

  constructor(
    public util: UtilProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items.push(this.pizzaImg);
    this.items.push(this.refriImg);
    this.items.push(this.sobremesaImg);
  }

  personalizar() {
    this.navCtrl.push("BuildOrderPage");
  }

  showProdutos() {
    // this.navCtrl.push("ProdutosPage", { categoria_id: categoria_id });
    this.navCtrl.push("OrderDrinksPage", { order: new Order("bebidas", "")});

  }
  showSobremesas() {
    this.navCtrl.push("SobremesasPage", { order: new Order("sobremesas", "")});

  }
  
  btnRotation() {
    this.util.showToast("Gira!");
  }

}
