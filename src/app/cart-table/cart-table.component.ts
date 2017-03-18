import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OrderItem } from '../order-item';

@Component({
  selector: 'cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnChanges {

  @Input() cart: OrderItem[];
  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();

  totalBv: number = 0;
  totalPrice: number = 0.00;

  ngOnChanges() {
    this.updateTotals();
  }

  delete(i: number): void {
    this.removeItem.emit(i);
  }

  updateTotals(): void {
    let totalBv = 0;
    let totalPrice = 0;
    for (let item of this.cart) {
      if (item.productCode != null) {
        totalBv += item.bv * item.quantity;
        totalPrice += item.price * item.quantity;
      }
    }
    this.totalBv = totalBv;
    this.totalPrice = totalPrice;
  }

}
