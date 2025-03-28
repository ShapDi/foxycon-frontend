import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInspectionChannelComponent } from './form-inspection-channel.component';

describe('FormInspectionChannelComponent', () => {
  let component: FormInspectionChannelComponent;
  let fixture: ComponentFixture<FormInspectionChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInspectionChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInspectionChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
