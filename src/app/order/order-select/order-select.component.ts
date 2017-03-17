import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CatalogService } from '../../catalog.service';
import { CartService } from '../../cart.service';

import { OrderItem } from '../../order-item';

@Component({
  selector: 'order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.css'],
  providers: [CatalogService]
})
export class OrderSelectComponent implements OnInit {

  categoryCodes: any[] = [];
  catalogMap: Map<any, any> = new Map;
  cart: OrderItem[] = [];
  catalogLoaded: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getCatalog();
    this.getCartInMemory("testUser");
  }

  onSubmit(): void {
    //TODO: Check for null-ish values in cart before setting
    // (or just refactor how items are inserted to fix this)
    this.cartService.setCart(this.cart);
    this.router.navigate(['../confirm'], { relativeTo: this.route });
  }

  getCatalog(): void {
    this.catalogService.getCatalog()
      .subscribe(
        catalog => {
          this.extractCategoryCodes(catalog);
          this.buildCatalog(catalog, this.categoryCodes);
          this.catalogLoaded = true;
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

  pushNewItem(): void {
    this.cart.push(new OrderItem());
  }

  updateCart(): void {
    if (this.catalogLoaded && this.cart.length > 0) {
      for (let item of this.cart) {
        if (item.categoryCode != null) {
          let catItems = this.catalogMap.get(item.categoryCode);
          if (catItems === undefined) {
            console.error("No items found for category");
          }
          else {
            let itemIsInCategory: boolean = (item.productCode == null);
            if (!itemIsInCategory) {
              for (let i of catItems) {
                if (item.productCode == i.pcode) {
                  itemIsInCategory = true;
                  break;
                }
              }
            }
            if (!itemIsInCategory) {
              item.productCode = catItems[0].pcode;
            }
          }

          for (let i of catItems) {
            if (item.productCode == i.pcode) {
              item.productName = i.name;
              item.bv = i.bv;
              item.price = i.price;
              if (item.quantity == null) {
                item.quantity = 1;
              }
              break;
            }
          }
        }
      }
    }
  }

  removeFromCart(i: number): void {
    this.cart.splice(i, 1);
  }

  getCartInMemory(user: string): void {
    this.cartService.getCart(user)
      .subscribe(
        cart => this.cart = cart,
        error => console.error("Cart retrieval failed. Error: " + error)
      )
      .unsubscribe();
  }

}
