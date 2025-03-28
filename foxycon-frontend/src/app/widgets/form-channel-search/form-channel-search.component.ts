import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { JsonPipe, NgFor} from '@angular/common';
import { YouTubeChannel } from '../../services/youtubeapi.interfece';
import { PaginationWidgetComponent } from '../pagination-widget/pagination-widget.component';


@Component({
  selector: 'app-form-channel-search',
  imports: [ReactiveFormsModule, JsonPipe, PaginationWidgetComponent, NgFor],
  templateUrl: './form-channel-search.component.html',
  styleUrl: './form-channel-search.component.css'
})
export class FormChannelSearchComponent {
  
  page:number[] = []
  youtubeApiService = inject(YoutubeApiService)
  profiles:YouTubeChannel[] = []

  form = new FormGroup({
    name_channel: new FormControl(null),
    link_channel: new FormControl(null), 
    number_views_min: new FormControl(null),
    number_views_max: new FormControl(null),
    add_data_min: new FormControl(null),
    add_data_max: new FormControl(null),
    number_subscribers_min: new FormControl(null),
    number_subscribers_max: new FormControl(null),
    number_video_min: new FormControl(null),
    number_video_max: new FormControl(null),
    created_at_min: new FormControl(null),
    created_at_max: new FormControl(null),
  })

  onSubmit() {
    if (this.form.valid){
      console.log(this.form.value)
        //@ts-ignore
      this.youtubeApiService.getYoutubeChannel(this.form.value).subscribe(val => {this.profiles = val})
      console.log(this.profiles)
    }

    

    function splitNumberIntoArray(num: number): number[] {
      const count = Math.floor(num / 10); // Делим на 10 и округляем вниз
      return Array.from({ length: count }, (_, i) => i + 1);
    }
  }
}
