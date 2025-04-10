import { Component } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { FormVideoSearchComponent } from '../../widgets/form-video-search/form-video-search.component';
import { FiltersComponent } from "../../widgets/filters/filters.component";
import { FilterMap } from '../../utils/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-search-page',
  imports: [FiltersComponent],
  templateUrl: './video-search-page.component.html',
  styleUrl: './video-search-page.component.css'
})
export class VideoSearchPageComponent {
  map = FilterMap;
}
