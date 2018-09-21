import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-finish-order',
  templateUrl: 'finish-order.html',
})
export class FinishOrderPage {

  public img: string = "../../assets/imgs/Pizza.jpg";
  public time: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinishOrderPage');
  }

  ionViewDidEnter() {

    this.timepassed();

  }

  async timepassed() {

    while (this.time < 1000) {
      setTimeout(() => {
        this.time++;
      }, 1000);
    }
  }


  open(teste) {

  }

}
