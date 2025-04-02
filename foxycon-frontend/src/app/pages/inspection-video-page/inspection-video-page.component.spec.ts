import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionVideoPageComponent } from './inspection-video-page.component';

describe('InspectionVideoPageComponent', () => {
  let component: InspectionVideoPageComponent;
  let fixture: ComponentFixture<InspectionVideoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectionVideoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspectionVideoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
