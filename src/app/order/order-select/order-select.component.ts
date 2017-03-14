import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CatalogService } from '../../catalog.service';

@Component({
  selector: 'order-select',
  templateUrl: './order-select.component.html',
  styleUrls: ['./order-select.component.css'],
  providers: [CatalogService]
})
export class OrderSelectComponent implements OnInit {

  catalog: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) { }

  ngOnInit() {
    this.getCatalog();
  }

  onSubmit(): void {
    this.router.navigate(['../confirm'], { relativeTo: this.route });
  }

  getCatalog(): void {
    this.catalogService.getCatalog()
      .subscribe(
        catalog => this.catalog = catalog
      );
  }

}
