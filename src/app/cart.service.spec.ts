import { TestBed, inject, async } from '@angular/core/testing';
import { Http } from '@angular/http'

import { CartService } from './cart.service';

let httpStub;
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
]

describe('CartService', () => {
  beforeEach(() => {
    httpStub = {}

    TestBed.configureTestingModule({
      providers: [
        CartService,
        { provide: Http, useValue: httpStub }
      ]
    });
  });

  it('should create service', async(inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  })));
});
