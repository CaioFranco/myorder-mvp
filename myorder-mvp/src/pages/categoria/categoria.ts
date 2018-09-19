import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-categoria",
  templateUrl: "categoria.html",
})
export class CategoriaPage {

  items: any[] = [];

  pizzaImg: string = "../../assets/imgs/Pizza.jpg";
  refriImg: string = "../../assets/imgs/Bebida.jpg";
  sobremesaImg: string = "../../assets/imgs/Sobremesa.jpg";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items.push(this.pizzaImg);
    this.items.push(this.refriImg);
    this.items.push(this.sobremesaImg);
  }

  showProdutos(categoria_id: string) {
    this.navCtrl.push("BuildOrderPage", { categoria_id: categoria_id });
  }
}
