import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { OrderConfirmComponent } from './order-confirm.component';
import { CartService } from '../../cart.service';
import { OrderService } from '../../order.service';
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

let locationStub = {
  back: () => {
    return "going back";
  }
}

let routerStub = {
  navigate: (commands: any[], params) => {
    return commands;
  }
}

let activatedRouteStub = "/order/confirm";

let cartServiceStub = {
  getCart: (user) => {
    return new Observable(observer => {
      observer.next(mockCart);
      observer.complete();
    });
  }
}

let orderServiceStub = {
  submitOrder: (user, cart) => {
    return user + cart;
  }
}

describe('OrderConfirmComponent', () => {
  let component: OrderConfirmComponent;
  let fixture: ComponentFixture<OrderConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConfirmComponent, MockCartTableComponent ],
      providers: [
        { provide: Location, useValue: locationStub },
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: CartService, useValue: cartServiceStub },
        { provide: OrderService, useValue: orderServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
