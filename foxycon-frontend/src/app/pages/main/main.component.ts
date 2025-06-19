import { Component, inject } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { YouTubeVideo } from '../../services/youtubeapi.interfece';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  youtubeApiService = inject(YoutubeApiService);
  profiles: YouTubeVideo[] = [];

  router = inject(Router);

  onClick(target: string) {
    this.router.navigate([target]);
  }
}
