import { Component, Inject, Input } from '@angular/core';
import { ChannelCardData } from '../../../interfaces/cards-interfaces';
import { CARD_DATA } from '../../../utils/tokens/card-data.token';
import { CommonModule } from '@angular/common';
import { SmartFormatPipe } from '../../../utils/pipes/SmartFormatPipe';

@Component({
  selector: 'app-card-channel',
  imports: [CommonModule, SmartFormatPipe],
  templateUrl: './card-channel.component.html',
  styleUrl: './card-channel.component.scss',
})
export class CardChannelComponent {
  avatarUrl: string;

  private fallbackUrl = 'assets/png/Avatar.png';

  constructor(@Inject(CARD_DATA) public data: ChannelCardData) {
    // this.avatarUrl = `https://yt3.googleusercontent.com/${data.channel.youtube_id}=s160-c-k-c0x00ffffff-no-rj`;
    this.avatarUrl = this.fallbackUrl;
  }

  useFallback() {
    this.avatarUrl = this.fallbackUrl;
  }

  originalOrder = () => 0;

  getExposedStats(): {} {
    return {
      views: this.data.channel.total_views,
      videos: this.data.channel.number_video,
      subscribers: this.data.channel.number_subscribers,
      youtube: this.data.channel.created_at,
      foxycon: this.data.channel.add_data,
    };
  }
}
