import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";

import { InAppBrowser } from "@ionic-native/in-app-browser";

import { DragulaModule } from "ng2-dragula";
import { PizzaProvider } from "../providers/pizza/pizza";
import { IngredientProvider } from "../providers/ingredient/ingredient";
import { UtilProvider } from "../providers/util/util";
import { BebidaProvider } from "../providers/bebida/bebida";
import { CartService } from "../providers/cart/cart.service";
import { StorageService } from "../providers/cart/storage.service";
import { AppsProvider } from '../providers/apps/apps';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DragulaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaProvider,
    IngredientProvider,
    UtilProvider,
    BebidaProvider,
    CartService,
    StorageService,
    AppsProvider
  ]
})
export class AppModule {}
