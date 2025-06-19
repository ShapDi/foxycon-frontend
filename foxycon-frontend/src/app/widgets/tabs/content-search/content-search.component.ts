import {
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  YoutubeChannel,
  YouTubeVideo,
} from '../../../services/youtubeapi.interfece';
import {
  BaseFilter,
  YouTubeVideoFilter,
} from '../../../interfaces/db-requests-interfaces';
import { CardData } from '../../../utils/types';
import { YoutubeApiService } from '../../../services/youtube-api.service';
import { CardContent, FilterMap } from '../../../utils/enums';
import { FiltersComponent } from '../../filters/filters.component';
import { CardsContainerComponent } from '../../cards-container/cards-container.component';
import { PaginationComponent } from '../../pagination/pagination.component';

@Component({
  selector: 'app-content-search',
  imports: [FiltersComponent, CardsContainerComponent, PaginationComponent],
  templateUrl: './content-search.component.html',
  styleUrl: './content-search.component.scss',
})
export class ContentSearchComponent implements OnInit {
  @Input() contentType!: CardContent;

  @ViewChild('cardsContainer') cardsContainerRef!: ElementRef;

  filter_map = FilterMap;
  youtubeApi: YoutubeApiService = inject(YoutubeApiService);

  page: number = 1;
  cards: CardData[] = [];
  items: number = this.cards.length;

  readonly itemsPerPage: number = 3;

  private filters: Partial<BaseFilter> = {};

  ngOnInit(): void {
    this.getContent(this.filters);
  }

  getContent(filters: Partial<BaseFilter>) {
    let contentVideo: YouTubeVideo[];
    this.filters = filters;
    // this.youtubeApi
    //   .getYoutubeVideo(
    //     this.filters,
    //     Math.max((this.page - 1) * this.itemsPerPage, 0),
    //     this.itemsPerPage
    //   )
    //   .subscribe((val) => {
    //     videos = val.content;
    //     // this.items = videos.length;

    //     this.cards = videos.map((video) => ({
    //       type: Card.Video,
    //       video: video,
    //     }));
    //   });
    if (this.contentType == CardContent.Channel) {
      let contentChannel: YoutubeChannel[] = [this.channel];
      this.items = contentChannel.length;
      this.cards = contentChannel.map((content) => ({
        type: this.contentType,
        channel: content,
      }));
    } else {
      contentVideo = [
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
        this.video,
        this.video2,
      ];
      this.items = contentVideo.length;
      this.cards = contentVideo.map((content) => ({
        type: this.contentType,
        video: content,
      }));
    }
  }

  getFilterMap(): FilterMap {
    switch (this.contentType) {
      case CardContent.Video:
        return FilterMap.VideoSearch;
      case CardContent.Channel:
        return FilterMap.ChannelSearch;
    }
  }

  onPageChange(newPage: number) {
    this.scrollToCards();

    setTimeout(() => {
      this.page = newPage;
      this.getContent(this.filters);
    }, 300);
  }

  private scrollToCards() {
    this.cardsContainerRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

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
    type_formats: [],
  };
  video2: YouTubeVideo = {
    id: 'tktK64VubiM',
    title: "Kingdom Hearts - 'Roxas's Theme' | ORIGINAL LYRICS | Lizz Robinett",
    views: 1000000,
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
    type_formats: [],
  };

  channel: YoutubeChannel = {
    youtube_id:
      'x2dFPdXeSbmjCJFCpG7s767wV2NHAdsn_ZG93mSsjWUMRqayZgGdQpdI6ksRaz_Cmt5ItHhQyg',
    id: 'tktK64VubiM',
    name_channel: 'Lizz Robinett',
    updating_data: null,
    number_subscribers: 968123,
    created_at: '31-03-2019',
    link_channel: 'https://www.youtube.com/@LizzRobinett',
    add_data: '31-03-2019',
    total_views: 356899574,
    number_video: 245,
    country_system_youtube: [],
  };
}
