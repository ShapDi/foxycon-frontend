import { Component, inject } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { Video } from '../../services/youtubeapi.interfece';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  youtubeApiService = inject(YoutubeApiService)
  profiles: Video[] = []
}
