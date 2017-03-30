import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { OrderStatusComponent } from './order-status.component';
import { OrderService } from '../order.service';

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
    ]
  }
]

@Component({
  selector: "status-details",
  template: ``
})
class MockStatusDetailsComponent {
  @Input() selectedOrderId;
  @Input() orders;
}

let orderServiceStub = {
  getOrders: (user) => {
    // return new Observable(observer => {
    //   observer.next(mockOrders);
    //   observer.complete();
    // });
    return mockOrders;
  }
}

describe('OrderStatusComponent', () => {
  let component: OrderStatusComponent;
  let fixture: ComponentFixture<OrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [OrderStatusComponent, MockStatusDetailsComponent],
      providers: [
        { provide: OrderService, useValue: orderServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
