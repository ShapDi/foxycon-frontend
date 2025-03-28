import { Component, Input, Output, Signal, EventEmitter} from '@angular/core';
import { PaginationWidgetComponent } from '../pagination-widget/pagination-widget.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-cart-pagination-widget',
  imports: [PaginationWidgetComponent, NgFor],
  templateUrl: './cart-pagination-widget.component.html',
  styleUrl: './cart-pagination-widget.component.css'
})
export class CartPaginationWidgetComponent {
  @Input() page_num_con!: number;
  @Input() itemsPerPage: number = 10; // Можно сделать входным параметром
  @Input() currentPage!: Signal<number> ;
  @Input() totalPages!: Signal<number>;
  @Output() incrementCountEvent = new EventEmitter<number>();

  page: number[] = [];

  ngOnChanges() {
    // Вызывается при изменении входных параметров
    if (this.page_num_con) {
      this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage);
    }
  }

  onClick() {
    this.incrementCountEvent.emit(this.itemsPerPage);
    console.log(this.itemsPerPage)
}
  // changePage(page: number)
  // {
  //   if (page >= 1 && page <= this.totalPages()) {
  //     this.pageChanged.emit(`${page}`);
  //   }
  // }

  getPageNumbers(totalItems: number, itemsPerPage: number): number[] {
    console.log(totalItems);
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}