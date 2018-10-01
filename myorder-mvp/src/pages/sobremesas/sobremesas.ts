import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';
import { SobremesaProvider } from '../../providers/sobremesa/sobremesa';
import { Order } from '../../model/order';

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
  // refreshDrink() {
  //   if (!this.util.empty(this.order.drinks)) {
  //     try {
  //       this.order.drinks.forEach(bebida => {
  //         var id = bebida.id
  //         var qtd = 0
  //         for (let index = 0; index < this.order.drinks.length; index++) {
  //           const drink = this.order.drinks[index];
  //           if (id === drink.id) {
  //             qtd = qtd + 1;
  //           }
  //         }
  //         bebida.quantidade = qtd;
  //       });
  //     } catch (error) {
  //       console.error("refreshDrink", error);
  //     }
  //   }
  // }

  // finish() {
  //   this.navCtrl.push("WaitOrderPage");
  // }
}
