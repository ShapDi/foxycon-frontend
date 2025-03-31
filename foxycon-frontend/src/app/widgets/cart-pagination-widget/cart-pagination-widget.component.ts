import { Component, Input, Output, Signal, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-cart-pagination-widget',
  imports: [],
  templateUrl: './cart-pagination-widget.component.html',
  styleUrl: './cart-pagination-widget.component.css'
})
export class CartPaginationWidgetComponent {
  @Input() page_num!:number;

}