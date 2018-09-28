import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuildOrderPage } from '../pages/build-order/build-order';
import { DragulaModule } from 'ng2-dragula';
import { PizzaProvider } from '../providers/pizza/pizza';
import { IngredientProvider } from '../providers/ingredient/ingredient';
import { UtilProvider } from '../providers/util/util';
import { BebidaProvider } from '../providers/bebida/bebida';

@NgModule({
  declarations: [
    MyApp
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaProvider,
    IngredientProvider,
    UtilProvider,
    BebidaProvider
  ]
})
export class AppModule {}
