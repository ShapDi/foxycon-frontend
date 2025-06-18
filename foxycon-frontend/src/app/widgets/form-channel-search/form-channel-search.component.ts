import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { JsonPipe, NgFor} from '@angular/common';
import { YoutubeChannel } from '../../services/youtubeapi.interfece';
import { PaginationWidgetComponent } from '../pagination-widget/pagination-widget.component';
import { CardChannelComponent } from '../card-channel/card-channel.component';
	import {AsyncPipe} from '@angular/common';
import {TuiCurrency, TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiError,
    TuiGroup,
    TuiIcon,
    TuiLabel,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiBlock,
    TuiCheckbox,
    TuiChevron,
    TuiDataListWrapper,
    TuiFieldErrorPipe,
    TuiInputNumber,
    TuiPassword,
    TuiRadio,
    TuiSelect,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputDateModule,
    TuiInputModule,
    TuiInputPhoneModule,
    TuiInputSliderModule,
    TuiInputTimeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import { CartChannelNewComponent } from '../cart-channel-new/cart-channel-new.component';
import { PaginationPanelComponent } from '../pagination-panel/pagination-panel.component';



	class Сountry {
    constructor(
        protected readonly name_db: string,
    ) {}
 
    protected toString(): string {
        return `${this.name_db}`;
    }
}



@Component({
  selector: 'app-form-channel-search',
  imports: [ReactiveFormsModule, PaginationWidgetComponent, NgFor, PaginationPanelComponent,CardChannelComponent,CartChannelNewComponent,
    	        AsyncPipe,
        ReactiveFormsModule,
        TuiBlock,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiCurrencyPipe,
        TuiDataListWrapper,
        TuiError,
        TuiFieldErrorPipe,
        TuiForm,
        TuiGroup,
        TuiHeader,
        TuiIcon,
        TuiInputDateModule,
        TuiInputModule,
        TuiInputNumber,
        TuiInputPhoneModule,
        TuiInputSliderModule,
        TuiInputTimeModule,
        TuiLabel,
        TuiPassword,
        TuiRadio,
        TuiSelect,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
        TuiTooltip,
    
  ],
  templateUrl: './form-channel-search.component.html',
  styleUrl: './form-channel-search.component.css'
})
export class FormChannelSearchComponent {
  isLoading: boolean = false;
  page: number = 0
  youtubeApiService = inject(YoutubeApiService)
  profiles:YoutubeChannel[] = []
  currentPage = signal(0);
  pageSize = 10;


  protected country = ['Russia'];

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
    country_sys: new FormControl(null),
  })

  onSubmit() {
    this.form
    if (this.form.valid){
      console.log(this.form.value)
        //@ts-ignore
      this.youtubeApiService.getYoutubeChannel(this.form.value, 0,10).subscribe(val => {
        this.profiles = val.content;
        this.page = val.count;
        console.log(this.profiles); 
      });
    console.log(this.profiles)
    console.log(this.page)
    }
        function splitNumberIntoArray(num: number): number[] {
      const count = Math.floor(num / 10); // Делим на 10 и округляем вниз
      return Array.from({ length: count }, (_, i) => i + 1);
    }
}



  logValue(event: number) {
    this.page = 0;
    const formValue = this.form.value;
    const dataForApi = {
      ...formValue,
      offset: 0,
      limit: 10,   
    };
    console.log(event)
    //@ts-ignore
    this.youtubeApiService.getYoutubeChannel(this.form.value,(event-1)*10,10).subscribe(val => {
      this.profiles = val.content;
      this.page = val.count; // предполагая, что getPageNumbers - метод компонента
      console.log(this.profiles); // переместим console.log внутрь подписки
    });
  console.log(this.profiles)
  console.log(this.page)
  }
  

}
