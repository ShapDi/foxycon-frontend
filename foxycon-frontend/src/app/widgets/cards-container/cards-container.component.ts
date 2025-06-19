import { Component, inject, Injector, Input, Type } from '@angular/core';
import { CardData } from '../../utils/types';
import { CardsResolverService } from '../../services/cards-resolver.service';
import { CardContent } from '../../utils/enums';
import { CARD_DATA } from '../../utils/tokens/card-data.token';
import { DynamicCardDirective } from '../../utils/directives/dynamic-card.directive';

@Component({
  selector: 'app-cards-container',
  imports: [DynamicCardDirective],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.scss',
})
export class CardsContainerComponent {
  @Input() cards!: CardData[];

  constructor(
    private resolver: CardsResolverService,
    private injector: Injector
  ) {}

  getComponent(type: CardContent): Type<any> | null {
    return this.resolver.getComponent(type);
  }

  createInjector(card: CardData): Injector {
    return Injector.create({
      providers: [{ provide: CARD_DATA, useValue: card }],
      parent: this.injector,
    });
  }
}
