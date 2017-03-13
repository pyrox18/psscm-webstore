import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.css']
})
export class OrderSelectComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.router.navigate(['../confirm'], { relativeTo: this.route });
  }

}
