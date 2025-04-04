import { Component, Input } from '@angular/core';
import { YoutubeChannel } from '../../services/youtubeapi.interfece';

@Component({
  selector: 'app-card-channel',
  imports: [],
  templateUrl: './card-channel.component.html',
  styleUrl: './card-channel.component.css'
})
export class CardChannelComponent {
  @Input() data_cart!:YoutubeChannel;
}
