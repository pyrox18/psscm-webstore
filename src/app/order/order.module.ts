import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSelectComponent } from './order-select/order-select.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderSelectComponent,
    OrderConfirmComponent,
    OrderSuccessComponent
  ]
})
export class OrderModule { }
