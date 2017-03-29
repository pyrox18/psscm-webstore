import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { OrderSelectComponent } from './order/order-select/order-select.component';
import { OrderConfirmComponent } from './order/order-confirm/order-confirm.component';
import { OrderSuccessComponent } from './order/order-success/order-success.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatusDetailsComponent } from './order-status/status-details/status-details.component';

import { AppRoutingModule } from './app-routing.module';
import { OrderRoutingModule } from './order/order-routing.module';
import { CartTableComponent } from './cart-table/cart-table.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderSelectComponent,
    OrderConfirmComponent,
    OrderSuccessComponent,
    OrderStatusComponent,
    PageNotFoundComponent,
    CartTableComponent,
    StatusDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
