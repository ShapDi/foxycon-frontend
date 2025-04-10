import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomSelectComponent } from "../../../common-ui/custom-select/custom-select.component";
import { OptionConfig } from '../../../utils/types';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, CustomSelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() options: Record<string, OptionConfig> = {};
  @Input() label: string = '';
}
