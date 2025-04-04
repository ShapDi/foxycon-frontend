import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChannelComponent } from './card-channel.component';

describe('CardChannelComponent', () => {
  let component: CardChannelComponent;
  let fixture: ComponentFixture<CardChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
