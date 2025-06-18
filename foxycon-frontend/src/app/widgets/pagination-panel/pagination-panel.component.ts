import {ChangeDetectionStrategy, Component, Input, Output, Signal, EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiPagination} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
  selector: 'app-pagination-panel',
  imports: [
      FormsModule,
      TuiInputSliderModule,
      TuiPagination,
      TuiTextfieldControllerModule,
  ],
  standalone: true,
  exportAs: "Example1",
  templateUrl: './pagination-panel.component.html',
  styleUrls: ['./pagination-panel.component.less', './pagination-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationPanelComponent {

  @Input() page_num_con!: number;
  @Input() itemsPerPage: number = 10; // Можно сделать входным параметром
  @Input() currentPage: number = 1;
  @Input() totalPages!: Signal<number>;
  @Output() incrementCountEvent = new EventEmitter<number>();
  
  
  page: number[] = [];

  page_int: number = 0

	protected sidePadding = 3;

  ngOnChanges() {
    if (this.page_num_con) {
      this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage, this.currentPage);
    }
  }

  onClick(page_num:number) {
    console.log(this.page_num_con)

    console.log(page_num)
    this.currentPage = page_num
    this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage, this.currentPage);
    this.incrementCountEvent.emit(this.currentPage);

    // console.log(page_num)
}

	protected goToPage(index: number): void {
      // this.page = this.getPageNumbers(this.page_num_con, this.itemsPerPage, this.currentPage);
      console.log(this.currentPage)
      this.currentPage = index
      this.incrementCountEvent.emit(this.currentPage+1);
    }


getPageNumbers(
  totalItems: number,
  itemsPerPage: number,
  currentPage: number // Этот параметр больше не используется для определения диапазона, но остается в сигнатуре функции.
): number[] {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(Math.ceil(totalItems / itemsPerPage))
  this.page_int =  Math.ceil(totalItems / itemsPerPage)
  if (totalPages <= 0) { // Если totalItems = 0, totalPages будет 0.
    return [];
  }
  
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  console.log(pages)
  return pages;
}


  



}
