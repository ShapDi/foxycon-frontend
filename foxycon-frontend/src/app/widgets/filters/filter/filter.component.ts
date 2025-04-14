import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CustomSelectComponent } from "../../../common-ui/custom-select/custom-select.component";
import { OptionConfig } from '../../../utils/types';

@Component({
  selector: 'app-filter',
  imports: [FormsModule, CustomSelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterComponent),
      multi: true
    }
  ]
})
export class FilterComponent implements ControlValueAccessor {
  @Input() options: Record<string, OptionConfig> = {};
  @Input() label: string = '';

  value: any;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setValue(val: any) {
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }
}
