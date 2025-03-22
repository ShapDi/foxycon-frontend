import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSearchPageComponent } from './video-search-page.component';

describe('VideoSearchPageComponent', () => {
  let component: VideoSearchPageComponent;
  let fixture: ComponentFixture<VideoSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
