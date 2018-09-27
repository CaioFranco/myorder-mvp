import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController } from "ionic-angular";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";
import { FinishOrderPage } from "../finish-order/finish-order";
import { IngredientProvider } from "../../providers/ingredient/ingredient";
import { PizzaProvider } from "../../providers/pizza/pizza";

@IonicPage()
@Component({
  selector: "page-build-order",
  templateUrl: "build-order.html",
})
export class BuildOrderPage {

  public subs = new Subscription();
  public IMG_DEFAULT: string = "../../assets/imgs/pizza.svg";
  public imgOrder: string;

  public order = {
    name: null,
    edit: false,
    itens: []
  }

  public pizzas;
  public ingredients;

  orderItems: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dragula: DragulaService, public toastCrtl: ToastController) {
    this.imgOrder = this.IMG_DEFAULT;
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
        this.addClass(el, "add-ingredient");
        if (target !== null && target.id !== "left") {
          var id = el.id;
          this.addItemToOrder(id);
        }
      })
    );
  }

  ionViewDidLoad(){
    this.ingredients = IngredientProvider.getIngredients();
    this.pizzas= PizzaProvider.getPizzas();
  }

  getIngredient(id: string) {
    return this.ingredients.find(item => item.id === id);
  }

  addItemToOrder(id: string) {
    let item = this.getIngredient(id);
    this.order.name = "blank";
    this.order.edit = true;
    this.order.itens.push(item);

    this.orderItems.push(item);
    
    this.presentToast(id);
    this.refreshOrder();
  }

  removeItem(item) {
    var index = this.orderItems.indexOf(item, 0);
    console.log(index);
    if (index > -1) {
      this.orderItems.splice(index, 1);
    }
    this.refreshOrder();
  }

  refreshOrder() {
    try {
      var hasCheese: boolean = this.orderItems.find(i => i.id === "cheese") != null;
      var hasMushroom: boolean = this.orderItems.find(i => i.id === "mushroom") != null;
      var hasCalabresa:boolean = this.orderItems.find(i => i.id === "calabresa") != null;
    } catch (error) {
      console.error(error);
    }

    if (hasCheese) {
      console.log("ADD IMAGE QUEIJO");
    } 
    if (hasCalabresa) {
      this.imgOrder = "../../assets/imgs/pizza_salami.svg";
    } else {
      this.imgOrder = this.IMG_DEFAULT;
    }
    if (hasMushroom) {
      console.log("ADD IMAGE COGUMELO");
    } 
  }


  btnFinishOrder() {
    console.log("FINISH");
    console.log(JSON.stringify(this.order));
    //this.navCtrl.push("FinishOrderPage");
  }

  btnCleanOrder(){
    this.orderItems = [];
    this.refreshOrder();
  }

  presentToast(id) {
    var i = this.getIngredient(id);
    const toast = this.toastCrtl.create({
      message: `${i.name} was added successfully`,
      duration: 3000,
      position: "middle"
    });
    toast.present();
  }

  selectPizza(pizza) {
    pizza.ingredient.forEach(element => {
      this.orderItems.push(element);
    });
    console.log("PIZZA: ", JSON.stringify(pizza));
  }

  private hasClass(el: Element, name: string): any {
    return new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)").test(el.className);
  }

  private addClass(el: Element, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(" ") : name;
    }
  }

  private removeClass(el: Element, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp("(?:^|\\s+)" + name + "(?:\\s+|$)", "g"), "");
    }
  }


}
