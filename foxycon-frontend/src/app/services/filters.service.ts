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
      'просмотров': this.presets.getPreset(FilterPreset.AllOrRange, 'number_views'),
      'лайков': this.presets.getPreset(FilterPreset.AllOrRange, 'number_likes'),
      'загрузки на ютуб': this.presets.getPreset(FilterPreset.AllOrRangeDate, 'release_date'),
      'добавления в базу': this.presets.getPreset(FilterPreset.AllOrRangeDate, 'add_data'),
      'гео': this.presets.getPreset(FilterPreset.AllOrSingleString, 'location'),
    },
    [FilterMap.ChannelSearch]: {
      'просмотров': this.presets.getPreset(FilterPreset.AllOrRange, 'number_views'),
      'подписчиков': this.presets.getPreset(FilterPreset.AllOrRange, 'number_subscribers'),
      'видео': this.presets.getPreset(FilterPreset.AllOrRange, 'number_video'),
      'регистрации на ютуб': this.presets.getPreset(FilterPreset.AllOrRangeDate, 'created_at'),
      'добавления в базу': this.presets.getPreset(FilterPreset.AllOrRangeDate, 'add_data'),
    }
  };

  getFiltersForPage(page: FilterMap): Record<string, FilterType>{
    return this.filters_map[page]
  }
}
