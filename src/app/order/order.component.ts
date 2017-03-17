import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [CartService]
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
