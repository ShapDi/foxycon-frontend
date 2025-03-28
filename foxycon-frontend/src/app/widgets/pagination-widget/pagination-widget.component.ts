import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-widget',
  imports: [],
  templateUrl: './pagination-widget.component.html',
  styleUrl: './pagination-widget.component.css'
})
export class PaginationWidgetComponent {
  // @Input() page_num!: number;
  @Input() page_num!:number;
}
