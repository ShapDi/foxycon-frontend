import { Component, Input, Output, Signal,EventEmitter } from '@angular/core';
import { CartPaginationWidgetComponent } from '../cart-pagination-widget/cart-pagination-widget.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-pagination-widget',
  imports: [CartPaginationWidgetComponent, NgFor],
  templateUrl: './pagination-widget.component.html',
  styleUrl: './pagination-widget.component.css'
})
export class PaginationWidgetComponent {
  @Input() page_num_con!: number;
  @Input() itemsPerPage: number = 10; // Можно сделать входным параметром
  @Input() currentPage: number = 1;
  @Input() totalPages!: Signal<number>;
  @Output() incrementCountEvent = new EventEmitter<number>();

  page: number[] = [];

  ngOnChanges() {
    if (this.page_num_con) {
      this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage, this.currentPage);
    }
  }

  onClick(page_num:number) {

    console.log(page_num)
    this.currentPage = page_num
    this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage, this.currentPage);
    this.incrementCountEvent.emit(this.currentPage);
    // console.log(page_num)
}

getPageNumbers(
  totalItems: number,
  itemsPerPage: number,
  currentPage: number
): number[] {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return [];

  // Определяем границы видимого диапазона
  const leftBound = Math.max(1, currentPage - 5);
  const rightBound = Math.min(totalPages, currentPage + 5);

  const pages: number[] = [];

  // Всегда добавляем первую страницу, если она не входит в диапазон
  if (leftBound > 1) {
    pages.push(1);
  }

  // Добавляем страницы вокруг текущей
  for (let i = leftBound; i <= rightBound; i++) {
    pages.push(i);
  }

  // Добавляем последнюю страницу, если она не входит в диапазон
  if (rightBound < totalPages) {
    pages.push(totalPages);
  }

  return pages;
}

}
