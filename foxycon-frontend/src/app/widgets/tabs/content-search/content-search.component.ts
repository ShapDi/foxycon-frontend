import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  YoutubeChannel,
  YouTubeVideo,
} from '../../../services/youtubeapi.interfece';
import { BaseFilter } from '../../../interfaces/db-requests-interfaces';
import { CardData } from '../../../utils/types';
import { YoutubeApiService } from '../../../services/youtube-api.service';
import { CardContent, FilterMap } from '../../../utils/enums';
import { FiltersComponent } from '../../filters/filters.component';
import { CardsContainerComponent } from '../../cards-container/cards-container.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { SpinnerComponent } from '../../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-search',
  imports: [
    FiltersComponent,
    CardsContainerComponent,
    PaginationComponent,
    CommonModule,
  ],
  templateUrl: './content-search.component.html',
  styleUrl: './content-search.component.scss',
})
export class ContentSearchComponent implements AfterViewInit {
  @Input() contentType!: CardContent;

  @ViewChild('cardsContainer') cardsContainerRef!: ElementRef;

  isLoading = false;

  filter_map = FilterMap;
  youtubeApi: YoutubeApiService = inject(YoutubeApiService);

  page: number = 1;
  cards: CardData[] = [];
  items: number = this.cards.length;

  readonly itemsPerPage: number = 12;

  private filters: Partial<BaseFilter> = {};

  ngAfterViewInit(): void {
    this.getContent(this.filters);
  }

  getContent(filters: Partial<BaseFilter>) {
    this.isLoading = true;
    this.filters = filters;

    const offset = Math.max((this.page - 1) * this.itemsPerPage, 0);

    const handleResponse = <T>(
      val: { content: T[]; count: number },
      logFn: (item: T) => void,
      mapFn: (item: T) => CardData
    ) => {
      this.items = val.count;
      val.content.forEach(logFn);
      this.cards = val.content.map(mapFn);
      this.isLoading = false;
    };

    switch (this.contentType) {
      case CardContent.Video:
        this.youtubeApi
          .getYoutubeVideo(this.filters, offset, this.itemsPerPage)
          .subscribe((val) =>
            handleResponse<YouTubeVideo>(
              val,
              (v) => console.log(v.system_id),
              (v) => ({ type: CardContent.Video, video: v })
            )
          );
        break;

      case CardContent.Channel:
        this.youtubeApi
          .getYoutubeChannel(this.filters, offset, this.itemsPerPage)
          .subscribe((val) =>
            handleResponse<YoutubeChannel>(
              val,
              (c) => console.log(c.link_channel),
              (c) => ({ type: CardContent.Channel, channel: c })
            )
          );
        break;
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
