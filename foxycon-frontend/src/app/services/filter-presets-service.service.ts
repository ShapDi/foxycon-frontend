import { Injectable } from '@angular/core';
import { FilterPreset as FilterType } from '../utils/types';
import { FilterOptionsBuilder } from '../utils/builders/filter-options-builder';
import { FilterPreset } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class FilterPresetsService {
  private builder = new FilterOptionsBuilder()

  private presets: Record<FilterPreset, FilterType> = {
    [FilterPreset.AllOrRange]: this.builder.start('all', 'любым количеством').withoutFields()
      .start('range', 'диапозоном').withClamp()
      .build(),
    [FilterPreset.AllOrRangeDate]: this.builder.start('all', 'любым временем').withoutFields()
      .start('range_date', 'диапозоном времени').withDateRange()
      .build(),
    [FilterPreset.AllOrSingleString]: this.builder.start('all', 'любым').withoutFields()
      .start('single_string', 'конкретным').withSingleValue()
      .build(),
    [FilterPreset.AllOrSingleNumber]: this.builder.start('all', 'любым').withoutFields()
      .start('single_number', 'конкретным').withSingleValue('value', 'number', 'Enter value')
      .build()
  };

  getPreset(name: FilterPreset): FilterType {
    return this.presets[name];
  }
}
