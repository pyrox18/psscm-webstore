import { Component, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { OrderItem } from '../../../order-item';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements DoCheck {

  @Input() categoryCodes: any[];
  @Input() catalogMap: Map<any, any>;
  @Input() cart: OrderItem[];
  @Output() addItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() cartModified: EventEmitter<any> = new EventEmitter<any>();

  totalBv: number = 0;
  totalPrice: number = 0.00;

  ngDoCheck() {
    this.cartModified.emit();
    this.updateTotals();
  }

  pushNewItem(): void {
    this.addItem.emit();
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
