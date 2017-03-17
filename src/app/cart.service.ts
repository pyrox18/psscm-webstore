import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CartService {

  constructor(private http: Http) { }

  getCart(user: string): Observable<any[]> {
    let storedCart = localStorage.getItem("cart");
    let cart: any[];
    if (storedCart == "" || storedCart == null || storedCart == undefined) {
      cart = [];
    }
    else {
      cart = JSON.parse(storedCart);
    }

    let obs: Observable<any[]> = new Observable(observer => {
      observer.next(cart);
      observer.complete();
    });

    return obs;
  }

  setCart(cart: any[]): void {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

}
