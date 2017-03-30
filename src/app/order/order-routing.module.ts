import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OrderSelectComponent } from './order-select/order-select.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderStatusComponent } from './order-status/order-status.component';

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'select',
        component: OrderSelectComponent
      },
      {
        path: 'confirm',
        component: OrderConfirmComponent
      },
      {
        path: 'success',
        component: OrderSuccessComponent
      },
      {
        path: 'status',
        component: OrderStatusComponent
      },
      {
        path: '',
        redirectTo: 'select',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class OrderRoutingModule { }
