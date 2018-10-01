import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';
import { SobremesaProvider } from '../../providers/sobremesa/sobremesa';
import { Order } from '../../model/order';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {

public desserts;
public order: Order;

  constructor(
    public util: UtilProvider,
    public screen: ScreenOrientation,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.desserts = SobremesaProvider.getSobremesas();
  }


  btnGoBack() {
    this.navCtrl.pop();
  }

  addToOrder(dessert) {
    if (this.order.desserts.find(i => i.id === dessert.id) == null) {
      dessert.quantidade = 1;
      this.order.desserts.push(dessert);
    } else {
      dessert.quantidade = dessert.quantidade + 1;
    }
  }

  decreaseQuantity(dessert) {
    if (!this.util.empty(this.order.desserts)) {
      if (this.order.desserts.find(i => i.id === dessert.id) != null && dessert.quantidade !== 0) {
        dessert.quantidade = dessert.quantidade - 1;
      }
    }
  }

  refreshDessert() {
    if (!this.util.empty(this.order.desserts)) {
      try {
        this.order.desserts.forEach(dessert => {
          var id = dessert.id
          var qtd = 0
          for (let index = 0; index < this.order.desserts.length; index++) {
            const dessert = this.order.desserts[index];
            if (id === dessert.id) {
              qtd = qtd + 1;
            }
          }
          dessert.quantidade = qtd;
        });
      } catch (error) {
        console.error("refreshDrink", error);
      }
    }
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
