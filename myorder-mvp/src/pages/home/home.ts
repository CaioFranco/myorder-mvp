import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { CartService } from "../../providers/cart/cart.service";
import { UtilProvider } from "../../providers/util/util";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  constructor(public navCtrl: NavController, public cartService: CartService, public util: UtilProvider) {

  }

  login() {
    this.cartService.createOrClearCart();
    this.util.currentTime = 0;
    this.navCtrl.setRoot("CategoriaPage");
  } 
}
