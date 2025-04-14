import { Component } from '@angular/core';
import { FiltersComponent } from "../../widgets/filters/filters.component";
import { FilterMap } from '../../utils/enums';
import { TabsComponent } from "../../widgets/tabs/tabs.component";

@Component({
  selector: 'app-video-search-page',
  imports: [TabsComponent],
  templateUrl: './video-search-page.component.html',
  styleUrl: './video-search-page.component.scss'
})
export class VideoSearchPageComponent {
  map = FilterMap;
}
