import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderDrinksPage } from './order-drinks';

@NgModule({
  declarations: [
    OrderDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderDrinksPage),
  ],
})
export class OrderDrinksPageModule {}
