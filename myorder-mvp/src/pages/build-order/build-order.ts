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

  public order: Order;

  public hasItem: boolean;

  public pizzas;
  public ingredients;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dragula: DragulaService,
    public toastCrtl: ToastController,
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
          console.log(id);
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
      if (this.order.itens.find(i => i.id === item.id) == null) {
        this.order.time = this.order.time + item.time;
        this.order.itens.push(item);
      }
      this.hasItem = true;
      this.refreshOrder();
    } catch (error) {
      console.error("addItemToOrder", JSON.stringify(error));
    }
  }

  removeItem(item) {
    var index = this.order.itens.indexOf(item, 0);
    if (index > -1) {
      this.order.itens.splice(index, 1);
    }
    if (this.util.empty(this.order.itens)) {
      this.hasItem = false;
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
      var hasCatupiry: boolean = ingredients.find(i => i.id === "catupiry") != null;
    } catch (error) {
      console.error("refreshOrder:", error);
    }
    if (!hasCheese && !hasCalabresa) {
      this.imgOrder = this.IMG_DEFAULT;
    }

    if (hasCheese) {
      this.imgOrder = "../../assets/imgs/pizzas/mussarela.png"
    }
    if (hasCheese && hasCatupiry) {
      this.imgOrder = "../../assets/imgs/pizzas/mussarela-cat.png"
    }
    if (hasTomate && hasCheese) {
      this.imgOrder = "../../assets/imgs/pizzas/mussarela-t.png"
    }
    if (hasTomate && hasCheese && hasCatupiry) {
      this.imgOrder = "../../assets/imgs/pizzas/mussarela-t-c.png"
    }
    if (!hasTomate && hasCheese && hasCalabresa && hasCatupiry) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-q.png"
    }
    // calabresa
    if (hasCalabresa && !hasCebola && !hasCheese) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa.png";
    }
    if (!hasTomate && hasCheese && hasCalabresa) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-m.png"
    }
    if (hasCalabresa && hasCebola) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c.png"
    }
    if (hasCalabresa && hasCatupiry && !hasCebola) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-cat.png"
    }
    if (hasTomate && hasCheese && hasCalabresa) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-q-t.png"
    }

    if (hasCalabresa && hasCatupiry && !hasCebola && hasCheese) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-m-cat.png"
    }

    if (hasCalabresa && hasCebola && hasCatupiry && !hasCheese) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c-cat.png";
    }
    if (hasCalabresa && hasCebola && hasCheese && !hasCatupiry && !hasTomate) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c-q.png"
    }

    if (hasCalabresa && hasCebola && hasCheese && hasTomate && !hasCatupiry) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c-q-t.png";
    }
    if (hasCalabresa && hasCebola && hasCheese && hasTomate && hasCatupiry) {
      this.imgOrder = "../../assets/imgs/pizzas/calabresa-c-t-q-cat.png";
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
    if (!this.util.empty(this.order.itens)) {
      this.btnCleanOrder();
    }
    pizza.ingredient.forEach(element => {
      this.addItemToOrder(element.id, pizza.name);
    });
  }

  btnFinishOrder() {
    console.log("FINISH");
    console.log(JSON.stringify(this.order));
    if (this.order.itens !== null && this.order.itens.length !== 0) {
      // this.navCtrl.push("WaitOrderPage", { order: this.order });
      this.navCtrl.push("ProdutosPage", {order: this.order});
    }
  }

  btnCleanOrder() {
    this.order.name = "custom";
    this.order.itens = [];
    this.hasItem = false;
    this.refreshOrder();
  }

  btnGoBack() {
    this.navCtrl.pop();
  }

  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }
}
