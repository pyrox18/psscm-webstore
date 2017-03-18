import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderSelectComponent } from './order-select/order-select.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

import { OrderRoutingModule } from './order-routing.module';
import { CartTableComponent } from '../cart-table/cart-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ],
  declarations: [
    OrderSelectComponent,
    OrderConfirmComponent,
    OrderSuccessComponent,
    CartTableComponent
  ]
})
export class OrderModule { }
