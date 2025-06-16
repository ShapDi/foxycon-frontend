import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-card',
  imports: [],
  templateUrl: './pagination-card.component.html',
  styleUrl: './pagination-card.component.scss',
})
export class PaginationCardComponent {
  @Input() index?: number;
  @Input() active: boolean = false;
  @Input() label?: string;
  @Input() disabled?: boolean = false;
}
