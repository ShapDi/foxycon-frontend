import {
  ComponentRef,
  Directive,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { CardData } from '../types';
import { CardsResolverService } from '../../services/cards-resolver.service';
import { animate, AnimationBuilder, style } from '@angular/animations';
import { SpinnerComponent } from '../../widgets/spinner/spinner.component';
import { CARD_DATA } from '../tokens/card-data.token';

@Directive({
  selector: '[appDynamicCard]',
  standalone: true,
})
export class DynamicCardDirective implements OnChanges {
  @Input('appDynamicCard') card!: CardData;

  private componentRef?: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private resolver: CardsResolverService,
    private animationBuilder: AnimationBuilder
  ) {}

  async ngOnChanges() {
    this.viewContainerRef.clear();

    // const spinnerRef = this.viewContainerRef.createComponent(SpinnerComponent);

    // await new Promise((resolve) => setTimeout(resolve, 200));

    const componentType = this.resolver.getComponent(this.card.type);

    if (!componentType) return;

    const customInjector = Injector.create({
      providers: [{ provide: CARD_DATA, useValue: this.card }],
      parent: this.injector,
    });

    // spinnerRef.destroy();

    const componentRef = this.viewContainerRef.createComponent(componentType, {
      injector: customInjector,
    });
    this.componentRef = componentRef;

    const player = this.animationBuilder
      .build([
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ])
      .create(componentRef.location.nativeElement);

    player.play();
  }
}
