import { Component, inject, Input } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { FiltersService } from '../../services/filters.service';
import { FilterMap } from '../../utils/enums';
import { FilterPreset } from '../../utils/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  imports: [FilterComponent, CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Input() label: string = '';
  @Input() filters_map: FilterMap = FilterMap.VideoSearch;

  private filters_service = inject(FiltersService)

  getFilters(): Record<string, FilterPreset>{
    return this.filters_service.getFiltersForPage(this.filters_map!)
  }
}
