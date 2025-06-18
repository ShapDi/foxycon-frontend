import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartChannelNewComponent } from './cart-channel-new.component';

describe('CartChannelNewComponent', () => {
  let component: CartChannelNewComponent;
  let fixture: ComponentFixture<CartChannelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartChannelNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartChannelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
