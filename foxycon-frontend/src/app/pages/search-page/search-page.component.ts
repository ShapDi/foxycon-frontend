import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiSegmented} from '@taiga-ui/kit';
import {NgFor} from '@angular/common';
import { FormChannelSearchComponent } from '../../widgets/form-channel-search/form-channel-search.component';
import { CartChannelNewComponent } from '../../widgets/cart-channel-new/cart-channel-new.component';
import { CardVideoComponent } from "../../widgets/card-video/card-video.component";

@Component({
  selector: 'app-search-page',
	imports: [NgFor, TuiBadgeNotification, TuiIcon, TuiSegmented, FormChannelSearchComponent, CartChannelNewComponent, CardVideoComponent],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.less', './search-page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
protected readonly sizes = ['l'] as const;

}
