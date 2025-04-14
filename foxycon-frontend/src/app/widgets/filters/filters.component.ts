import { Component, inject, Input, OnInit } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { FiltersService } from '../../services/filters.service';
import { FilterMap } from '../../utils/enums';
import { FilterPreset } from '../../utils/types';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [FilterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {
  @Input() label: string = '';
  @Input() filters_map!: FilterMap;

  form!:FormGroup;

  private formBuilder = inject(FormBuilder)
  private filters_service = inject(FiltersService)
  private filters!: Record<string, FilterPreset>;

  ngOnInit(): void {
    this.filters = this.filters_service.getFiltersForPage(this.filters_map!)
    const group: Record<string, any> = {};

    for (const key in this.filters)
      group[key] = this.formBuilder.control(null);

    this.form = this.formBuilder.group(group);
  }

  getFilters(): Record<string, FilterPreset>{
    return this.filters
  }

  getFormControl(key: string): FormControl {
    return this.form.controls[key] as FormControl;
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
