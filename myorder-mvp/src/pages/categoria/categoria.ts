import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items.push(this.pizzaImg);
    this.items.push(this.refriImg);
    this.items.push(this.sobremesaImg);
  }

  personalizar(categoria_id: string) {
    this.navCtrl.push("BuildOrderPage", { categoria_id: categoria_id });
  }
  
  showProdutos(categoria_id: string) {
    this.navCtrl.push("ProdutosPage", { categoria_id: categoria_id });
  }
}
