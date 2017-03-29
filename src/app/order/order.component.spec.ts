import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';

import { OrderComponent } from './order.component';
import { CartService } from '../cart.service';
import { RouterLinkStubDirective, RouterOutletStubComponent } from '../../testing/router-stubs';

let cartServiceStub = {};
let httpStub = {};

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      providers: [
        { provide: CartService, useValue: cartServiceStub },
        { provide: Http, useValue: httpStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
