import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  ViewChild,
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
    }, 100);
  }

  private scrollToCards() {
    this.cardsContainerRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
