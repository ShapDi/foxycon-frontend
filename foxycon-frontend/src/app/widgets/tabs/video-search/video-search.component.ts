import { Component, inject } from '@angular/core';
import { FiltersComponent } from "../../filters/filters.component";
import { Card, FilterMap } from '../../../utils/enums';
import { CardsContainerComponent } from "../../cards-container/cards-container.component";
import { CardData } from '../../../utils/types';
import { YouTubeVideo } from '../../../services/youtubeapi.interfece';
import { YoutubeApiService } from '../../../services/youtube-api.service';

@Component({
  selector: 'app-video-search',
  imports: [FiltersComponent, CardsContainerComponent],
  templateUrl: './video-search.component.html',
  styleUrl: './video-search.component.scss'
})
export class VideoSearchComponent {
  filter_map = FilterMap;
  youtubeApi: YoutubeApiService = inject(YoutubeApiService);

  // getCards(): YouTubeVideo[] {
  //   return this.youtubeApi.getYoutubeVideo()
  // }

  video: YouTubeVideo = {
    id: 'tktK64VubiM',
    title: "Kingdom Hearts - 'Roxas's Theme' | ORIGINAL LYRICS | Lizz Robinett",
    views: 2000000,
    release_date: '30-03-2019',
    updating_time: null,
    add_time: '69:42',
    channel_id: 'UCq36dja_0U4SgB3wYVtr_Zw',
    system_id: 'system_id',
    link: 'https://www.youtube.com/watch?v=tktK64VubiM',
    likes: 32000,
    updating_data: null,
    add_data: '31-03-2019',
    type_contents: [],
    type_formats: []
  }
  video2: YouTubeVideo = {
    id: 'tktK64VubiM',
    title: "Kingdom Hearts - 'Roxas's Theme' | ORIGINAL LYRICS | Lizz Robinett",
    views: 2000000,
    release_date: '30-03-2019',
    updating_time: null,
    add_time: '69:42',
    channel_id: 'UCq36dja_0U4SgB3wYVtr_Zw',
    system_id: 'system_id',
    link: 'https://www.youtube.com/watch?v=tktK64VubiM',
    likes: 32000,
    updating_data: null,
    add_data: '31-03-2019',
    type_contents: [],
    type_formats: []
  }
  cards: CardData[] = [
    {
      type: Card.Video,
      video: this.video
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    },
    {
      type: Card.Video,
      video: this.video2
    }
  ];
}
