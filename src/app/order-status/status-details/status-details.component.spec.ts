import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { StatusDetailsComponent } from './status-details.component';
import { MockCartTableComponent } from '../../../testing/mock-components';

@Component({
  template: `
    <status-details [orders]="orders" [selectedOrderId]="selectedOrderId"></status-details>
  `
})
export class MockSuperComponent {
  orders = [
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
  selectedOrderId = 100000;
}

describe('StatusDetailsComponent', () => {
  let component: MockSuperComponent;
  let fixture: ComponentFixture<MockSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusDetailsComponent, MockSuperComponent, MockCartTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
