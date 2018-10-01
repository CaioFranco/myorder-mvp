import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { UtilProvider } from "../../providers/util/util";
import { Order } from "../../model/order";
import { PizzaProvider } from "../../providers/pizza/pizza";
import { BebidaProvider } from "../../providers/bebida/bebida";

@IonicPage()
@Component({
  selector: "page-finish-order",
  templateUrl: "finish-order.html",
})
export class FinishOrderPage {

  public order: Order;
  public itens: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public util: UtilProvider
  ) {

    // this.order = navParams.get("order"); // comente essa linha para desenvolver e para teste
    // descomente esse bloco quando for desenvolver e pra teste
    this.order = new Order("teste");
    this.order.time = 100;
    this.order.pizzas = PizzaProvider.getPizzas()[0];
    this.order.drinks = BebidaProvider.getBebidas()[0];
  }

  ionViewDidLoad() {
    this.itens = this.order.pizzas;
  }
  removeItem() {
    // this.items = this.cartService.removeProduto(produto).items;
  }
  increaseQuantity() {
    // this.items = this.cartService.increaseQuantity(produto).items;
  }
  decreaseQuantity() {
    // this.items = this.cartService.decreaseQuantity(produto).items;

  }

  btnGoBack() {
    this.navCtrl.pop();
  }

  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }

}
