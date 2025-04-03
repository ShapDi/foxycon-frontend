import { Component, inject } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { Video } from '../../services/youtubeapi.interfece';

@Component({
  selector: 'app-main',
  imports: [HeaderRoutersComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  youtubeApiService = inject(YoutubeApiService)
  profiles: Video[] = []
}
