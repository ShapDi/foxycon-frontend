import { Component, inject } from '@angular/core';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { Video } from '../../services/youtubeapi.interfece';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [HeaderRoutersComponent, JsonPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  youtubeApiService = inject(YoutubeApiService)
  profiles: Video[] = []

  // constructor(){
  //   this.youtubeApiService.getYoutubeVideos().subscribe(val => {this.profiles = val})
  // }
}
