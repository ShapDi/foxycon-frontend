import { Component, Inject, Input } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { CARD_DATA } from '../../../utils/tokens/card-data.token';
import { VideoCardData } from '../../../interfaces/cards-interfaces';
import { SmartFormatPipe } from '../../../utils/pipes/SmartFormatPipe';

@Component({
  selector: 'app-card-video',
  imports: [YouTubePlayerModule, CommonModule, SmartFormatPipe],
  templateUrl: './card-video.component.html',
  styleUrl: './card-video.component.scss',
})
export class CardVideoComponent {
  playerOptions = {
    autoplay: 0,
  };

  constructor(@Inject(CARD_DATA) public data: VideoCardData) {}

  originalOrder = () => 0;

  getExposedStats(): {} {
    return {
      views: this.data.video.views,
      likes: this.data.video.likes,
      youtube: this.data.video.release_date,
      foxycon: this.data.video.add_data,
    };
  }
}
