import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FilterComponent } from './filter/filter.component';
import { FiltersService } from '../../services/filters.service';
import { FilterMap } from '../../utils/enums';
import {
  CustomSelectValue,
  FilterPreset,
  OptionConfig,
} from '../../utils/types';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FilterComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent implements OnInit {
  @Input() label: string = '';
  @Input() filters_map!: FilterMap;
  @Output() filter_results = new EventEmitter<Record<string, any>>();

  form!: FormGroup;

  private formBuilder = inject(FormBuilder);
  private filtersService = inject(FiltersService);
  private filters!: Record<string, FilterPreset>;

  ngOnInit(): void {
    this.filters = this.filtersService.getFiltersForPage(this.filters_map);
    this.form = this.formBuilder.group({});
    this.initializeFilters();
  }

  initializeFilters() {
    for (const filterKey in this.filters) {
      this.form.addControl(filterKey, new FormControl(null));
    }
  }

  getFilters(): Record<string, FilterPreset> {
    return this.filters;
  }

  onFilterValueChange(filterKey: string, value: any) {
    const control = this.form.get(filterKey);
    if (control) {
      control.setValue(value);
    } else {
      this.form.setControl(filterKey, new FormControl(value));
    }
  }

  onSubmit() {
    const rawValue = this.form.value as CustomSelectValue;

    const flatValues = Object.values(rawValue).reduce((acc, filter) => {
      for (const [key, value] of Object.entries(filter.fieldValues)) {
        if (value !== '' && value !== null && value !== undefined) {
          acc[key] = value;
        }
      }
      return acc;
    }, {} as Record<string, any>);

    this.filter_results.emit(flatValues);
  }
}
