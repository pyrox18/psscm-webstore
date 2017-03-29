import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { OrderSuccessComponent } from './order-success.component';
import { OrderService } from '../../order.service';
import { MockCartTableComponent } from '../../../testing/mock-components';

let mockOrders = [
  {
    orderId: 100000,
    user: "testUser",
    cart: [
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
    ],
    status: 0
  }
]

let orderServiceStub = {
  getOrders: user => {
    return new Observable(observer => {
      observer.next(mockOrders);
      observer.complete();
    })
  }
}

describe('OrderSuccessComponent', () => {
  let component: OrderSuccessComponent;
  let fixture: ComponentFixture<OrderSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSuccessComponent, MockCartTableComponent ],
      providers: [
        { provide: OrderService, useValue: orderServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
