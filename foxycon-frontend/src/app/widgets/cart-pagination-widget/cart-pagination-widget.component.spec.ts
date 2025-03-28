import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPaginationWidgetComponent } from './cart-pagination-widget.component';

describe('CartPaginationWidgetComponent', () => {
  let component: CartPaginationWidgetComponent;
  let fixture: ComponentFixture<CartPaginationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartPaginationWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPaginationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
