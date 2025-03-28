import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionVideoComponent } from './form-inspection-video.component';

describe('FormInspectionVideoComponent', () => {
  let component: FormInspectionVideoComponent;
  let fixture: ComponentFixture<FormInspectionVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInspectionVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInspectionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
