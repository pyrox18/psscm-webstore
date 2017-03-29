import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: "cart-table",
  template: ``
})
export class MockCartTableComponent {
  @Input() cart;
  @Input() disableDelete: boolean;
  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();
}