import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAuthWidgetComponent } from './google-auth-widget.component';

describe('GoogleAuthWidgetComponent', () => {
  let component: GoogleAuthWidgetComponent;
  let fixture: ComponentFixture<GoogleAuthWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAuthWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAuthWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
