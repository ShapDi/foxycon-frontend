import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionChannelPageComponent } from './inspection-channel-page.component';

describe('InspectionChannelPageComponent', () => {
  let component: InspectionChannelPageComponent;
  let fixture: ComponentFixture<InspectionChannelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionChannelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionChannelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
