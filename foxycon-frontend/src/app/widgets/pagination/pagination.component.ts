import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { PaginationCardComponent } from './pagination-card/pagination-card.component';
import { delay } from 'rxjs';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginationCardComponent, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 1;
  @Input() totalItems!: number;
  @Input() itemsPerPage!: number;
  @Output() pageChanged = new EventEmitter<number>();

  pages: (number | 'dots')[] = [];
  totalPages: number = 1;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = this.buildPages();
  }

  buildPages(): (number | 'dots')[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages: (number | 'dots')[] = [];

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);

    if (current > 4) {
      pages.push('dots');
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 3) {
      pages.push('dots');
    }

    pages.push(total);
    return pages;
  }

  selectPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChanged.emit(page);
      this.pages = this.buildPages();
    }
  }

  prevPage(): void {
    this.selectPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.selectPage(this.currentPage + 1);
  }

  isActive(page: number): boolean {
    return this.currentPage === page;
  }

  isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
}
