import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChannelSearchComponent } from './form-channel-search.component';

describe('FormChannelSearchComponent', () => {
  let component: FormChannelSearchComponent;
  let fixture: ComponentFixture<FormChannelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormChannelSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChannelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
