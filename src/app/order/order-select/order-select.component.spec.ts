// This test doesn't function yet - considering code refactor before writing tests

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { OrderSelectComponent } from './order-select.component';
import { CartService } from '../../cart.service';
import { CatalogService } from '../../catalog.service';
import { MockCartTableComponent } from '../../../testing/mock-components';

let mockCart = [
  {
    categoryCode: 101,
    productCode: 1011,
    productName: "Test 1",
    bv: 20,
    price: 100.00,
    quantity: 2
  },
  {
    categoryCode: 102,
    productCode: 1022,
    productName: "Test 2",
    bv: 10,
    price: 50.00,
    quantity: 3
  }
];

let mockCatalog = [
  ["categoryCode", "productCode", "productName", "price", "bv"],
  ["101", "1011", "Test 1", "100.00", "20"]
];

class RouterStub {
  navigate(commands: any[], extras: any) {
    return commands;
  }
}

let cartServiceStub = {
  getCart: (user: string) => {
    return new Observable(observer => {
      observer.next(mockCart);
      observer.complete();
    });
  },

  setCart: (cart) => {
    return cart;
  }
}

let catalogServiceStub = {
  getCatalog: () => {
    return new Observable(observer => {
      observer.next(mockCatalog);
      observer.complete();
    });
  }
}

let httpStub = { }

let activatedRoute = "/order/select";
let cartService;
let catalogService;

describe('OrderSelectComponent', () => {
  let component: OrderSelectComponent;
  let fixture: ComponentFixture<OrderSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [OrderSelectComponent, MockCartTableComponent],
      providers: [
        { provide: Http, useValue: httpStub },
        { provide: Router, useValue: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: CartService, useValue: cartServiceStub },
        { provide: CatalogService, useValue: catalogServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSelectComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    catalogService = TestBed.get(CatalogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
