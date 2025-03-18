import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRoutersComponent } from './header-routers.component';

describe('HeaderRoutersComponent', () => {
  let component: HeaderRoutersComponent;
  let fixture: ComponentFixture<HeaderRoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRoutersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderRoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
