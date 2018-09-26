import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitOrderPage } from './wait-order';

@NgModule({
  declarations: [
    WaitOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitOrderPage),
  ],
})
export class WaitOrderPageModule {}
