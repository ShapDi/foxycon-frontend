import { Component } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { FormVideoSearchComponent } from '../../widgets/form-video-search/form-video-search.component';
import { PaginationWidgetComponent } from '../../widgets/pagination-widget/pagination-widget.component';

@Component({
  selector: 'app-video-search-page',
  imports: [HeaderRoutersComponent, FormVideoSearchComponent],
  templateUrl: './video-search-page.component.html',
  styleUrl: './video-search-page.component.css'
})
export class VideoSearchPageComponent {
}
