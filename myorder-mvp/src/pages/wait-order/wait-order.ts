import { AppsProvider } from './../../providers/apps/apps';
import { UtilProvider } from "./../../providers/util/util";
import { TimerComponent } from "./../../components/timer/timer";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Order } from "../../model/order";
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

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
    location: "no",
    hideurlbar: "yes",
    toolbar: "yes",
    closebuttoncaption: "Fechar", //iOS only
    disallowoverscroll: "no", //iOS only
    enableViewportScale: "no", //iOS only
    allowInlineMediaPlayback: "no",//iOS only
    presentationstyle: "pagesheet",//iOS only
    toolbarposition: "top",
  };

  constructor(
    private inAppBrowser: InAppBrowser,
    public appsUtil: AppsProvider,
    public screen: ScreenOrientation,
    public util: UtilProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.order = navParams.get("order");
    this.waitTime = this.order.time; // comente essa linha para desenvolver e para teste
    // this.waitTime = 300;  // descomente esse linha quando for desenvolver e pra teste
    this.Apps = appsUtil.getApps();
  }

  ionViewDidEnter() {
    this.timer.startTimer(this.waitTime);
  }

  btnNewOrder() {
    this.navCtrl.push("CategoriaPage");
  }

  btnRotation() {
    var orientation = this.screen.type;
    if (orientation == "landscape-primary") {      
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_SECONDARY);
    } else {
      this.screen.lock(this.screen.ORIENTATIONS.LANDSCAPE_PRIMARY);
    }
  }

  imageSelect(url) {
    if (!this.util.empty(url)) {
      this.inAppBrowser.create(url, "_blank", this.optionsBrowser);
    }
  }
}
