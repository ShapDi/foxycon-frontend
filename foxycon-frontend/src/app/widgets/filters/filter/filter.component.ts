import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CustomSelectComponent } from '../../../common-ui/custom-select/custom-select.component';
import { OptionConfig } from '../../../utils/types';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [CustomSelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() options!: Record<string, OptionConfig>;
  @Input() label: string = '';
  @Input() filterKey: string = '';
  @Input() formGroup!: FormGroup;
  @Output() valueChange = new EventEmitter<any>();

  onFilterValueChange(key: string, value: any) {
    this.formGroup.get(this.filterKey)?.setValue(value);
    this.valueChange.emit(value);
  }

  getControl(filterKey: string): FormControl {
    return this.formGroup.get(filterKey) as FormControl;
  }
}
