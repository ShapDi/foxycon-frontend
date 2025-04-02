import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { YouTubeVideo } from '../../services/youtubeapi.interfece';

@Component({
  selector: 'app-form-inspection-channel',
  imports: [ReactiveFormsModule],
  templateUrl: './form-inspection-channel.component.html',
  styleUrl: './form-inspection-channel.component.css'
})
export class FormInspectionChannelComponent {
  page: number = 0
  youtubeApiService = inject(YoutubeApiService)
  profiles:YouTubeVideo[] = []
  pageSize = 10;
  link_status!: string

  form = new FormGroup({
    link: new FormControl(null),
  })

  update_status_link(data:any){
    console.log(data)
    if (Array.isArray(data) && data.length > 0){
      this.link_status = "Канал найден в базе MB"
    } else {
      this.link_status = "Канал не найден в базе MB"
    }

  }


  onSubmit() {
    this.link_status = "Поиск"
    if (this.form.valid){
      this.page = 0;
      console.log(this.form.value)
        //@ts-ignore
        this.youtubeApiService.inspectionChannel(this.form.value).subscribe(val => {
          // this.profiles = val;// предполагая, что getPageNumbers - метод компонента
          this.update_status_link(val)
          console.log(val); 
        });
      // console.log(this.profiles)
      // console.log(this.page)
    }
  }

}
