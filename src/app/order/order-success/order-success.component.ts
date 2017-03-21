import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service'

@Component({
  selector: 'order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css'],
  providers: [OrderService]
})
export class OrderSuccessComponent implements OnInit {
  latestOrder: any[];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrders("testUser")
      .subscribe(
        orders => this.latestOrder = orders[orders.length - 1],
        err => console.error(err)
      )
      .unsubscribe();
  }

}
