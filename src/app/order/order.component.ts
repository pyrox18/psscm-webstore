import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [CartService]
})
export class OrderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private authService: AuthService  
  ) { }

  ngOnInit() {
  }

}
