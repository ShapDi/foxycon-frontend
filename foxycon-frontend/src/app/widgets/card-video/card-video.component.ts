import { Component, Input } from '@angular/core';
import { VideoItem } from '../../services/youtubeapi.interfece';

@Component({
  selector: 'app-card-video',
  imports: [],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.css'
})
export class CardVideoComponent {
  @Input() data_cart!:VideoItem;
}
