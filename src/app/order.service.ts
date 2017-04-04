import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OrderItem } from './order-item';

@Injectable()
export class OrderService {

  constructor() { }

  submitOrder(user: string, cart: OrderItem[]): void {
    let storedOrderList = localStorage.getItem("orderList");
    let orderList: any[];
    let orderId = 100000;
    if (storedOrderList == "" || storedOrderList == null || storedOrderList == undefined) {
      orderList = [];
    }
    else {
      orderList = JSON.parse(storedOrderList);
      orderId += orderList.length;
    }
    let newOrder = {
      "orderId": orderId,
      "user": user,
      "cart": cart,
      "status": 0
    }
    orderList.push(newOrder);
    localStorage.setItem("orderList", JSON.stringify(orderList));
  }

  getOrders(user: string): Observable<any[]> {
    let orderList: any[] = JSON.parse(localStorage.getItem("orderList"));
    let userOrders: any[] = [];

    if (orderList) {
      for (let order of orderList) {
        if (order.user == user) {
          userOrders.push(order);
        }
      }
    }

    let obs: Observable<any[]> = new Observable(observer => {
      observer.next(userOrders);
      observer.complete();
    })

    return obs;
  }

}
