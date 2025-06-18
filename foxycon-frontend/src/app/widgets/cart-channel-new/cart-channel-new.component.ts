import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiButton, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';
import {TuiBadge, TuiChevron} from '@taiga-ui/kit';
import {TuiCard, TuiHeader} from '@taiga-ui/layout';
import { YoutubeChannel } from '../../services/youtubeapi.interfece';

@Component({
    selector: 'app-cart-channel-new',
	  standalone: true,
    exportAs: "Example1",
    imports: [
        TuiBadge,
        TuiButton,
        TuiCard,
        TuiChevron,
        TuiExpand,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiTable,
        TuiTitle,
    ],
  templateUrl: './cart-channel-new.component.html',
  styleUrls: ['./cart-channel-new.component.css', ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartChannelNewComponent {
  public readonly collapsed = signal(true);
  @Input() data_cart!:YoutubeChannel;
  
}
