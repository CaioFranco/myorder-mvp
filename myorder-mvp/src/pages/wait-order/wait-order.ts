import { AppsProvider } from './../../providers/apps/apps';
import { UtilProvider } from "./../../providers/util/util";
import { TimerComponent } from "./../../components/timer/timer";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Order } from "../../model/order";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
  selector: "page-wait-order",
  templateUrl: "wait-order.html",
})
export class WaitOrderPage {

  @ViewChild(TimerComponent) timer: TimerComponent;

  public waitTime

  public order: Order;

  public Apps: any[] = [];
  public optionsBrowser: InAppBrowserOptions = {
    mediaPlaybackRequiresUserAction: "no",
    hideurlbar: "no",
    toolbar: "yes",
    closebuttoncaption : "Close", //iOS only
    disallowoverscroll : "no", //iOS only 
    enableViewportScale : "no", //iOS only 
    allowInlineMediaPlayback : "no",//iOS only 
    presentationstyle : "pagesheet",//iOS only 
  };

  constructor(
    private inAppBrowser: InAppBrowser,
    public appsUtil: AppsProvider,
    public util: UtilProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.order = navParams.get("order");
    this.waitTime = this.order.time; // comente essa linha para desenvolver e para teste
    // this.waitTime = 300;  // descomente esse linha quando for desenvolver e pra teste
    this.Apps = appsUtil.getApps();
  }

  ionViewDidLoad() {
    this.timer.startTimer(this.waitTime);
  }

  btnNewOrder() {
    this.navCtrl.push("CategoriaPage");
  }

  btnRotation() {
    this.util.showToast("VAI GIRAR!!!");
  }

  imageSelect(url) {
    const browser = this.inAppBrowser.create(url, "_self", this.optionsBrowser);
  }
}
