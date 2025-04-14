import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { OptionConfig } from '../../utils/types';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss'
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() options: Record<string, OptionConfig> = {};
  @Input() initialKey: string = '';
  @Output() valueChange = new EventEmitter<any>();

  selectedKey: string = '';
  isOpen = false;
  isDisabled = false;
  fieldValues: Record<string, any> = {};

  private onChange = (_: any) => { };
  private onTouched = () => { };

  constructor(private elementRef: ElementRef, @Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    const keys = Object.keys(this.options);
    if (keys.length > 0)
      this.selectedKey = this.options[this.initialKey] ? this.initialKey : keys[0];
  }

  get filteredKeys(): string[] {
    return Object.keys(this.options).filter(k => k !== this.selectedKey);
  }

  toggleDropdown(): void {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }

  preventDropdown(event: MouseEvent) {
    event.stopPropagation();
  }

  select(key: string): void {
    if (this.isDisabled)
      return;
  
    this.selectedKey = key;
    this.isOpen = false;
  
    const fields = this.options[key]?.fields;
    if (fields) {
      this.fieldValues = {};
      for (const field of fields) {
        this.fieldValues[field.name] = '';
      }
    } else {
      this.fieldValues = {};
    }
  
    const value = {
      selectedKey: this.selectedKey,
      fieldValues: this.fieldValues
    };
  
    this.onChange(value);
    this.valueChange.emit(value);
  }

  emitFieldValues() {
    const value = {
      selectedKey: this.selectedKey,
      fieldValues: this.fieldValues
    };
  
    this.onChange(value);
    this.valueChange.emit(value);
  }

  writeValue(value: any): void {
    if (value) {
      this.selectedKey = value.selectedKey;
      this.fieldValues = value.fieldValues;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.onTouched();
    }
  }
}
