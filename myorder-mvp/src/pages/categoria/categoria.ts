import { Order } from './../../model/order';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UtilProvider } from "../../providers/util/util";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
    public screen: ScreenOrientation,
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
    this.navCtrl.push("OrderDrinksPage", { order: new Order("bebidas", "")});

  }
  showSobremesas() {
    this.navCtrl.push("SobremesasPage", { order: new Order("sobremesas", "")});
  }
  
  btnRotation() {
    var orientation = this.screen.type;
    // this.util.showToast(orientation);
    if (orientation == "landscape-primary") {      
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_SECONDARY);
    } else {
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_PRIMARY);
    }
  }

}
