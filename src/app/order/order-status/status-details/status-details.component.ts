import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'status-details',
  templateUrl: './status-details.component.html',
  styleUrls: ['./status-details.component.css']
})
export class StatusDetailsComponent implements OnChanges {

  @Input() selectedOrderId: any;
  @Input() orders: any[];
  selectedOrder: any;

  ngOnChanges() {
    for (let order of this.orders) {
      if (order.orderId == this.selectedOrderId) {
        this.selectedOrder = order;
        break;
      }
    }
  }

}
