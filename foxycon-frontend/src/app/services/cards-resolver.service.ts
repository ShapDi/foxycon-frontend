import { Injectable, Type } from '@angular/core';
import { Card } from '../utils/enums';
import { CardVideoComponent } from '../widgets/card-video/card-video.component';
import { CardChannelComponent } from '../widgets/card-channel/card-channel.component';

@Injectable({
  providedIn: 'root'
})
export class CardsResolverService {
  private componentMap: Record<Card, Type<any>> = {
    [Card.Video]: CardVideoComponent,
    [Card.Channel]: CardChannelComponent,
  };

  getComponent(type: Card): Type<any> | null {
    return this.componentMap[type] || null;
  }
}
