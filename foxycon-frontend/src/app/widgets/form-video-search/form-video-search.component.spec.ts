import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVideoSearchComponent } from './form-video-search.component';

describe('FormVideoSearchComponent', () => {
  let component: FormVideoSearchComponent;
  let fixture: ComponentFixture<FormVideoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVideoSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormVideoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
