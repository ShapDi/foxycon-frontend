import { Injectable } from '@angular/core';
import { FilterPreset as FilterType } from '../utils/types';
import { FilterOptionsBuilder } from '../utils/builders/filter-options-builder';
import { FilterPreset } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class FilterPresetsService {
  private builder = new FilterOptionsBuilder()

  private presets: Record<FilterPreset, (key: string) => FilterType> = {
    [FilterPreset.AllOrRange]: (key) =>
      this.builder.start('all', 'любым').withoutFields()
        .start(key, 'диапозоном').withClamp()
        .build(),
    [FilterPreset.AllOrRangeDate]: (key) =>
      this.builder.start('all', 'любым').withoutFields()
        .start(key, 'диапозоном').withDateRange()
        .build(),
    [FilterPreset.AllOrSingleString]: (key) =>
      this.builder.start('all', 'любым').withoutFields()
        .start(key, 'конкретным').withSingleValue()
        .build(),
    [FilterPreset.AllOrSingleNumber]: (key) =>
      this.builder.start('all', 'любым').withoutFields()
        .start(key, 'конкретным').withSingleValue(key, 'number', 'Значение')
        .build()
  };

  getPreset(presetName: FilterPreset, key: string): FilterType {
    return this.presets[presetName](key);
  }
}
