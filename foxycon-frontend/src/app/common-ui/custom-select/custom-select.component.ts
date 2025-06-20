import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomSelectValue, OptionConfig } from '../../utils/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
})
export class CustomSelectComponent implements OnInit, OnChanges, OnDestroy {
  @Input() options: Record<string, OptionConfig> = {};
  @Input() control!: FormControl;
  @Output() valueChange = new EventEmitter<CustomSelectValue>();

  selectedKey: string = '';
  fieldGroup = new FormGroup({});
  isOpen = false;
  isActive = false;

  private fieldGroupSub?: Subscription;

  get selectedOption(): OptionConfig | undefined {
    return this.options[this.selectedKey];
  }

  get filteredKeys(): string[] {
    return Object.keys(this.options).filter((k) => k !== this.selectedKey);
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.selectedKey = this.control.value?.selectedKey || this.getDefaultKey();
    this.setupFieldGroup();
    this.emitCombinedValue();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && this.control) {
      this.selectedKey =
        this.control.value?.selectedKey || this.getDefaultKey();
      this.setupFieldGroup();
    }
  }

  ngOnDestroy(): void {
    this.fieldGroupSub?.unsubscribe();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  preventDropdown(event: MouseEvent) {
    event.stopPropagation();
  }

  onInputUpdated(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.isActive = value != '';
  }

  select(key: string): void {
    this.selectedKey = key;
    this.isOpen = false;
    this.isActive = false;
    this.setupFieldGroup();
    this.emitCombinedValue();
  }

  setupFieldGroup(): void {
    this.fieldGroupSub?.unsubscribe();
    const group: Record<string, FormControl> = {};
    const fields = this.selectedOption?.fields ?? [];

    for (const field of fields) {
      const initial = this.control.value?.fieldValues?.[field.name] ?? '';
      group[field.name] = new FormControl(initial);
    }

    this.fieldGroup = new FormGroup(group);

    this.fieldGroupSub = this.fieldGroup.valueChanges.subscribe(
      (newFieldValues) => {
        this.emitCombinedValue(newFieldValues);
      }
    );
  }

  emitCombinedValue(newFieldValues: any | null = null): void {
    const value = {
      selectedKey: this.selectedKey,
      fieldValues: newFieldValues ?? this.fieldGroup.value,
    };

    this.control.setValue(value);
    this.valueChange.emit(value);
  }

  private getDefaultKey(): string {
    const keys = Object.keys(this.options);
    return keys.length > 0 ? keys[0] : '';
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
