import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { CartTableComponent } from './cart-table.component';

@Component({
  template: `
    <cart-table [cart]="cart" (removeItem)="removeFromCart($event)"></cart-table>
  `
})
export class MockSuperComponent {

  cart = [
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

  removeFromCart(index) {
    console.log("removing index " + index);
  }

}

describe('CartTableComponent', () => {
  let component: MockSuperComponent;
  let fixture: ComponentFixture<MockSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartTableComponent, MockSuperComponent]
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
