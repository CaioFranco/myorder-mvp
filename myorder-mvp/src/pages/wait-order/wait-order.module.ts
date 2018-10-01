import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { WaitOrderPage } from "./wait-order";
import { TimerComponent } from "../../components/timer/timer";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    WaitOrderPage,
    TimerComponent
  ],
  imports: [
    IonicPageModule.forChild(WaitOrderPage),
  ],
})
export class WaitOrderPageModule {}
