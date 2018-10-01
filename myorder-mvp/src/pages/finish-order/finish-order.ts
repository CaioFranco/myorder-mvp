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
  public drinks;
  public desserts;
  public pizzas;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public util: UtilProvider
  ) {

    this.order = navParams.get("order"); // comente essa linha para desenvolver e para teste
    // descomente esse bloco quando for desenvolver e pra teste
    // this.order = new Order("teste", "../../assets/imgs/pizzas/calabresa-c-t-q-cat.png");
    // this.order.time = 100;
    // this.order.pizzas = PizzaProvider.getPizzas();
    // this.order.drinks = BebidaProvider.getBebidas();
  }

  ionViewDidLoad() {
    console.log(this.order.pizzasrc);
    this.drinks = this.order.drinks;
    this.pizzas = this.order.pizzas;
    // console.log(this.drinks);
    // console.log(this.pizzas);

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
  finish() {  
    this.navCtrl.push("WaitOrderPage", { order: this.order });
  }
  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }

}
