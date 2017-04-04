import { Component, OnInit } from '@angular/core';

import { OrderService } from '../../order.service';

@Component({
  selector: 'order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
  providers: [OrderService]
})
export class OrderStatusComponent implements OnInit {
  selectedOrderId: any;
  orders: any[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders("testUser")
      .subscribe(
        orders => {
          if (orders.length > 0) {
            this.orders = orders;
          }
          else {
            this.orders = null;
          }
        },
        err => console.error(err)
      )
      .unsubscribe();
  }

}
