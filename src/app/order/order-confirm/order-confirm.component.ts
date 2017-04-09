import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { CartService } from '../../cart.service';
import { OrderService } from '../../order.service';

import { OrderItem } from '../../order-item';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css'],
  providers: [OrderService]
})
export class OrderConfirmComponent implements OnInit {

  cart: OrderItem[];
  // totalBv: number = 0;
  // totalPrice: number = 0.00;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getCartInMemory("testUser");
    // this.updateTotals();
  }

  goBack(): void {
    this.location.back();
  }

  confirmOrder(): void {
    this.orderService.submitOrder("testUser", this.cartService.cart);
    this.cartService.clearCart();
    this.router.navigate(['../success'], { relativeTo: this.route });
  }

  // updateTotals(): void {
  //   let totalBv = 0;
  //   let totalPrice = 0;
  //   for (let item of this.cart) {
  //     if (item.productCode != null) {
  //       totalBv += item.bv * item.quantity;
  //       totalPrice += item.price * item.quantity;
  //     }
  //   }
  //   this.totalBv = totalBv;
  //   this.totalPrice = totalPrice;
  // }

  getCartInMemory(user: string): void {
    this.cartService.getCart(user);
      // .subscribe(
      //   cart => this.cart = cart,
      //   error => console.log("Cart retrieval failed. Error: " + error)
      // )
      // .unsubscribe();
  }

}
