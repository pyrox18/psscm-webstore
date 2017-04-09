import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { OrderItem } from './order-item';

@Injectable()
export class CartService {

  cart: OrderItem[];
  itemsInCart: Map<any, any>;

  constructor(private http: Http) { }

  getCart(user: string) {
    this.itemsInCart = new Map();
    let storedCart = localStorage.getItem("cart");
    // let cart: any[];
    if (storedCart == "" || storedCart == null || storedCart == undefined) {
      this.cart = [];
    }
    else {
      this.cart = JSON.parse(storedCart);
    }

    // let obs: Observable<any[]> = new Observable(observer => {
    //   observer.next(cart);
    //   observer.complete();
    // });

    // return obs;
  }

  setCart(cart: any[]): void {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  clearCart(): void {
    localStorage.removeItem("cart");
    this.cart = [];
    this.itemsInCart.clear();
  }

  addItem(item: OrderItem) {
    let existingItemIndex = this.itemsInCart.get(JSON.stringify(new OrderItem(item.categoryCode, item.productCode)));
    if (existingItemIndex !== undefined) {
      this.cart[existingItemIndex].quantity += item.quantity;
    }
    else {
      this.cart.push(item);
      this.itemsInCart.set(JSON.stringify(new OrderItem(item.categoryCode, item.productCode)), this.cart.length - 1);
    }
    this.cart = this.cart.slice(); // cd workaround
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    // Rebuild itemsInCart map
    this.itemsInCart.clear();
    for (let j = 0; j < this.cart.length; j++) {
      let item = new OrderItem(this.cart[j].categoryCode, this.cart[j].productCode);
      this.itemsInCart.set(JSON.stringify(item), j);
    }
    this.cart = this.cart.slice(); // cd workaround
  }

}
