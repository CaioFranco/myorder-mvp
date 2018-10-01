import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BebidaProvider } from "../../providers/bebida/bebida";
import { Order } from "../../model/order";
import { UtilProvider } from "../../providers/util/util";
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@IonicPage()
@Component({
  selector: "page-order-drinks",
  templateUrl: "order-drinks.html",
})
export class OrderDrinksPage {

  public order: Order;
  public bebidas;

  constructor(
    public util: UtilProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public screen: ScreenOrientation
  ) {
    this.order = navParams.get("order"); // comente essa linha para desenvolver e para teste
    // descomente esse bloco quando for desenvolver e pra teste
    // this.order = new Order("teste");
    // this.order.time = 100;
    // this.order.pizzas = PizzaProvider.getPizzas()[0];
    console.log(Order);
  }

  ionViewDidLoad() {
    this.bebidas = BebidaProvider.getBebidas();
  }

  addToOrder(bebida) {
    if (this.order.drinks.find(i => i.id === bebida.id) == null) {
      bebida.quantidade = 1;
      this.order.drinks.push(bebida);
    } else {
      bebida.quantidade = bebida.quantidade + 1;
    }
  }

  decreaseQuantity(bebida) {
    if (!this.util.empty(this.order.drinks)) {
      if (this.order.drinks.find(i => i.id === bebida.id) != null && bebida.quantidade !== 0) {
        bebida.quantidade = bebida.quantidade - 1;
      }
    }
  }

  refreshDrink() {
    if (!this.util.empty(this.order.drinks)) {
      try {
        this.order.drinks.forEach(bebida => {
          var id = bebida.id
          var qtd = 0
          for (let index = 0; index < this.order.drinks.length; index++) {
            const drink = this.order.drinks[index];
            if (id === drink.id) {
              qtd = qtd + 1;
            }
          }
          bebida.quantidade = qtd;
        });
      } catch (error) {
        console.error("refreshDrink", error);
      }
    }
  }

  finish() {
    if (!this.util.empty(this.order.drinks)) {
      try {
        this.order.drinks.forEach(bebida => {
          if (bebida.quantidade === 0) {
            var index = this.order.drinks.indexOf(bebida, 0);
            if (index > -1) {
              this.order.drinks.splice(index, 1);
            }
          }
        });
      } catch (error) {
        console.error("finish", error);
      }
    }
    console.log("ORDER", JSON.stringify(this.order, null, " "));
    // this.navCtrl.push("FinishOrderPage", { order: this.order });
    this.order.time = this.order.time + 60;
    this.navCtrl.push("FinishOrderPage", { order: this.order });
  }

  btnGoBack() {
    this.navCtrl.pop();
  }

  btnRotation() {
    var orientation = this.screen.type;
    if (orientation == "landscape-primary") {      
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_SECONDARY);
    } else {
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_PRIMARY);
    }
  }
}
