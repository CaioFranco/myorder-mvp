import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseOrderPage } from './choose-order';

@NgModule({
  declarations: [
    ChooseOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseOrderPage),
  ],
})
export class ChooseOrderPageModule {}
