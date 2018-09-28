import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";
import { IngredientProvider } from "../../providers/ingredient/ingredient";
import { PizzaProvider } from "../../providers/pizza/pizza";
import { UtilProvider } from "../../providers/util/util";
import { Order } from "../../model/order";

@IonicPage()
@Component({
  selector: "page-build-order",
  templateUrl: "build-order.html",
})
export class BuildOrderPage {

  public subs = new Subscription();
  public IMG_DEFAULT: string = "../../assets/imgs/pizzas/pizza.png";
  public imgOrder: string;

  public order : Order;

  public pizzas;
  public ingredients;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dragula: DragulaService, public toastCrtl: ToastController,
    public util: UtilProvider) {
    this.imgOrder = this.IMG_DEFAULT;
    this.order = new Order("custom");
    dragula.destroy("COPYABLE");
    dragula.createGroup("COPYABLE", {
      copy: (el, source) => {
        return source.id === "left";
      },
      accepts: (el, target, source, sibling) => {
        return target.id !== "left";
      }
    });
    this.subs.add(this.dragula.drop("COPYABLE")
      .subscribe(({ el, target, source, sibling }) => {
        this.util.addClass(el, "add-ingredient");
        if (target !== null && target.id !== "left") {
          var id = el.id;
          this.presentToastAddItem(id);
          this.addItemToOrder(id);
        }
      })
    );
  }

  ionViewDidLoad() {
    this.ingredients = IngredientProvider.getIngredients();
    this.pizzas = PizzaProvider.getPizzas();
  }

  getIngredient(id: string) {
    return this.ingredients.find(item => item.id === id);
  }

  addItemToOrder(id: string, pizza?) {
    let item = this.getIngredient(id);
    try {
      this.order.name = pizza != null ? pizza : "custom";
      this.order.itens.push(item);
      this.refreshOrder();
    } catch (error) {
      console.error("addItemToOrder", JSON.stringify(error));
    }
  }

  removeItem(item) {
    var index = this.order.itens.indexOf(item, 0);
    console.log(index);
    if (index > -1) {
      this.order.itens.splice(index, 1);
    }
    this.refreshOrder();
  }

  refreshOrder() {
    let ingredients = this.order.itens;
    try {
      var hasCheese: boolean = ingredients.find(i => i.id === "cheese") != null;
      var hasTomate: boolean = ingredients.find(i => i.id === "tomato") != null;
      var hasCalabresa: boolean = ingredients.find(i => i.id === "calabresa") != null;
      var hasCebola: boolean = ingredients.find(i => i.id === "cebola") != null;
    } catch (error) {
      console.error("refreshOrder:", error);
    }
    if (!hasCheese && !hasCalabresa) { 
      this.imgOrder = this.IMG_DEFAULT;
    }

    if (hasCheese) { 
      this.imgOrder = "../../assets/imgs/pizzas/mussarela.png"
    }

    if (hasCalabresa && !hasCebola) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa.png";
    } 
    if (hasTomate && hasCheese) { 
      this.imgOrder = "../../assets/imgs/pizzas/mussarela-t.png"
    } 
    if (hasCalabresa && hasCebola) { 
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c.png"
    }
  }

  presentToastAddItem(id) {
    var i = this.getIngredient(id);
    const toast = this.toastCrtl.create({
      message: `${i.name} was added successfully`,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

  selectPizza(pizza) {
    if (this.order.name !== "custom") {
      this.btnCleanOrder();
    } else if (this.order.itens != null && this.order.itens.length != 0) {
      this.util.showToast("ta aqui!!!!!!!!!!!!!");
      return;
    }
    pizza.ingredient.forEach(element => {
      this.addItemToOrder(element.id, pizza.name);
    });
    console.log("PIZZA: ", JSON.stringify(pizza));
  }

  btnFinishOrder() {
    console.log("FINISH");
    console.log(JSON.stringify(this.order));
    if (this.order.itens !== null && this.order.itens.length !== 0) {
      this.navCtrl.push("FinishOrderPage", {order: this.order});
    } else {
      this.util.showToast("PEDIDO VAZIO!!!!!!!!!!!!!!!!!!!!!!!!!!");
    }
  }

  btnCleanOrder() {
    this.order.name = "custom";
    this.order.itens = [];
    this.refreshOrder();
  }

  btnGoBack() {
    this.navCtrl.pop();
  }

  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }
}
