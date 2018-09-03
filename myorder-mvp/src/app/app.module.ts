import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BuildOrderPage } from '../pages/build-order/build-order';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BuildOrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DragulaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BuildOrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}