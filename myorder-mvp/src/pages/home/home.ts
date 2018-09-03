import { BuildOrderPage } from './../build-order/build-order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goBuildOrder(){
    this.navCtrl.push(BuildOrderPage);
  }
}
