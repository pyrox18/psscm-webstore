import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'order-status',
    component: OrderStatusComponent
  },
  {
    path: '',
    redirectTo: '/order/select',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
