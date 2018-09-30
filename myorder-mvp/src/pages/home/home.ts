import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { CartService } from "../../providers/cart/cart.service";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  constructor(public navCtrl: NavController, public cartService: CartService) {

  }

  login() {
    this.cartService.createOrClearCart();
    this.navCtrl.setRoot("CategoriaPage");
  } 
}
