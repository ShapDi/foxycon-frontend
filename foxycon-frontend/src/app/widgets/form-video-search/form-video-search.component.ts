import { Component, inject, signal } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YoutubeChannel, YouTubeVideo } from '../../services/youtubeapi.interfece';
import { JsonPipe, NgFor } from '@angular/common';
import { PaginationWidgetComponent } from '../pagination-widget/pagination-widget.component';
import { CartPaginationWidgetComponent } from '../cart-pagination-widget/cart-pagination-widget.component';
import { CardVideoComponent } from '../card-video/card-video.component';

@Component({
  selector: 'app-form-video-search',
  imports: [ReactiveFormsModule, PaginationWidgetComponent, CardVideoComponent,NgFor],
  templateUrl: './form-video-search.component.html',
  styleUrl: './form-video-search.component.css'
})
export class FormVideoSearchComponent {
  page: number = 0
  youtubeApiService = inject(YoutubeApiService)
  profiles:YouTubeVideo[] = []
  currentPage = signal(0);
  pageSize = 10;

  form = new FormGroup({
    title: new FormControl(null),
    number_views_min: new FormControl(null), 
    number_views_max: new FormControl(null),
    number_likes_min: new FormControl(null),
    number_likes_max: new FormControl(null),
    release_date_min: new FormControl(null),
    release_date_max: new FormControl(null),
    add_data_min: new FormControl(null),
    add_data_max: new FormControl(null),
    offset: new FormControl<number | null>(0),
    limit: new FormControl<number | null>(10),
  })

  onPageChanged(newPage: number) {
    this.currentPage.set(newPage);
    this.onSubmit();
  }

  logValue(event: number) {
    const formValue = this.form.value;
    const dataForApi = {
      ...formValue,
      offset: 0,   
      limit: 10,   
    };
    console.log(event)
    //@ts-ignore
    this.youtubeApiService.getYoutubeVideo(this.form.value,(event-1)*10,10).subscribe(val => {
      this.profiles = val.content;
      this.page = val.count; 
      console.log(this.profiles); 
    });
  console.log(this.profiles)
  console.log(this.page)
  }

  onSubmit() {

    // console.log(this.form.value)
    if (this.form.valid){
      this.page = 0;
      console.log(this.form.value)
        //@ts-ignore
        this.youtubeApiService.getYoutubeVideo(this.form.value, 0,10).subscribe(val => {
          this.profiles = val.content;
          this.page = val.count;
          console.log(this.profiles); 
        });
      console.log(this.profiles)
      console.log(this.page)
    }
}
}
