import { Injectable, Type } from '@angular/core';
import { CardContent } from '../utils/enums';
import { CardVideoComponent } from '../widgets/cards-container/card-video/card-video.component';
import { CardChannelComponent } from '../widgets/cards-container/card-channel/card-channel.component';

@Injectable({
  providedIn: 'root',
})
export class CardsResolverService {
  private componentMap: Record<CardContent, Type<any>> = {
    [CardContent.Video]: CardVideoComponent,
    [CardContent.Channel]: CardChannelComponent,
  };

  getComponent(type: CardContent): Type<any> | null {
    return this.componentMap[type] || null;
  }
}
