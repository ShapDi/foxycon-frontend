import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationWidgetComponent } from './pagination-widget.component';

describe('PaginationWidgetComponent', () => {
  let component: PaginationWidgetComponent;
  let fixture: ComponentFixture<PaginationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
