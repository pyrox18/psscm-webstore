import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  confirmOrder(): void {
    this.router.navigate(['../success'], { relativeTo: this.route });
  }

}
