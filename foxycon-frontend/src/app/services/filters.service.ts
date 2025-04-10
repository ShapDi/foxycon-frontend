import { inject, Injectable } from '@angular/core';
import { FilterPreset as FilterType } from '../utils/types';
import { FilterPresetsService } from './filter-presets-service.service';
import { FilterMap, FilterPreset } from '../utils/enums';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private presets = inject(FilterPresetsService)

  private filters_map: Record<string, Record<string, FilterType>> = {
    [FilterMap.VideoSearch]: {
      'просмотров': this.presets.getPreset(FilterPreset.AllOrRange),
      'лайков': this.presets.getPreset(FilterPreset.AllOrRange),
      'загрузки на ютуб': this.presets.getPreset(FilterPreset.AllOrRangeDate),
      'добавления в базу': this.presets.getPreset(FilterPreset.AllOrRangeDate),
    },
    [FilterMap.ChannelSearch]: {
      'просмотров': this.presets.getPreset(FilterPreset.AllOrRange),
      'подписчиков': this.presets.getPreset(FilterPreset.AllOrRange),
      'видео': this.presets.getPreset(FilterPreset.AllOrRange),
      'регистрации на ютуб': this.presets.getPreset(FilterPreset.AllOrRangeDate),
      'добавления в базу': this.presets.getPreset(FilterPreset.AllOrRangeDate),
    }
  };

  getFiltersForPage(page: FilterMap): Record<string, FilterType>{
    return this.filters_map[page]
  }
}
