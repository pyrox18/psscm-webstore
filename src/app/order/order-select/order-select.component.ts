import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CatalogService } from '../../catalog.service';
import { CartService } from '../../cart.service';
import { AuthService } from '../../auth.service';

import { OrderItem } from '../../order-item';

@Component({
  selector: 'order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.css'],
  providers: [CatalogService]
})
export class OrderSelectComponent implements OnInit {

  categoryCodes: any[] = [];
  catalogMap: Map<any, any> = new Map();
  cart: OrderItem[] = [];
  itemsInCart: Map<any, any> = new Map();
  item: OrderItem = new OrderItem();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cartService: CartService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getCatalog();
    this.getCartInMemory("testUser");
    this.item.quantity = 1;
  }

  onSubmit(): void {
    //TODO: Check for null-ish values in cart before setting
    // (or just refactor how items are inserted to fix this)
    this.cartService.setCart(this.cart);
    this.router.navigate(['../confirm'], { relativeTo: this.route });
  }

  getCatalog(): void {
    this.catalogService.getCatalog()
      .then(
        catalog => {
          this.extractCategoryCodes(catalog);
          this.buildCatalog(catalog, this.categoryCodes);
        },
        err => console.error(err)
      );
  }

  extractCategoryCodes(catalog: any[]): void {
    for (let i = 1; i < catalog.length; i++) {
      this.categoryCodes.push(catalog[i][0]);
    }

    this.categoryCodes = this.categoryCodes.filter((item, pos) => {
      return this.categoryCodes.indexOf(item) === pos;
    });
  }

  // Searching algorithm here can be improved - now O(n) = n
  buildCatalog(catalog: any[][], categoryCodes: any[]): void {
    for (let i of categoryCodes) {
      let items: Object[] = [];
      for (let j = 1; j < catalog.length; j++) {
        if (catalog[j][0] == i) {
          items.push(
            {
              "pcode": catalog[j][1],
              "name": catalog[j][2],
              "bv": catalog[j][3],
              "price": catalog[j][4]
            }
          );
        }
      }
      this.catalogMap.set(i, items);
    }
  }

  removeFromCart(i: number): void {
    this.cart.splice(i, 1);
    // Rebuild itemsInCart map
    this.itemsInCart.clear();
    for (let j = 0; j < this.cart.length; j++) {
      let item = new OrderItem(this.cart[j].categoryCode, this.cart[j].productCode);
      this.itemsInCart.set(JSON.stringify(item), j);
    }
    this.cart = this.cart.slice(); // cd workaround
  }

  getCartInMemory(user: string): void {
    this.cartService.getCart(user)
      .subscribe(
        cart => this.cart = cart,
        error => console.error("Cart retrieval failed. Error: " + error)
      )
      .unsubscribe();
  }

  categoryCodeChanged(): void {
    this.item.productCode = null;
  }

  productCodeChanged(): void {
    let itemFound = false;
    let catalogItems = this.catalogMap.get(this.item.categoryCode);
    for (let i of catalogItems) {
      if (this.item.productCode == i.pcode) {
        this.item.productName = i.name;
        this.item.bv = i.bv;
        this.item.price = i.price;
        itemFound = true;
        break;
      }
    }
    if (!itemFound) {
      this.item.productName = "";
      this.item.bv = 0;
      this.item.price = 0.00;
    }
  }

  addItemToCart(): void {
    let existingItemIndex = this.itemsInCart.get(JSON.stringify(new OrderItem(this.item.categoryCode, this.item.productCode)));
    if (existingItemIndex !== undefined) {
      this.cart[existingItemIndex].quantity += this.item.quantity;
    }
    else {
      this.cart.push(this.item);
      this.itemsInCart.set(JSON.stringify(new OrderItem(this.item.categoryCode, this.item.productCode)), this.cart.length - 1);
    }
    this.item = new OrderItem();
    this.item.quantity = 1;
    this.cart = this.cart.slice(); // cd workaround
  }

}
