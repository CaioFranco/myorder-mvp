import { DragulaModule } from "ng2-dragula";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { BuildOrderPage } from "./build-order";

@NgModule({
  declarations: [
    BuildOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(BuildOrderPage),
    DragulaModule.forRoot()
  ],
})
export class BuildOrderPageModule {}
