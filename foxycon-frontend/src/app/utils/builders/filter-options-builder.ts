import { FieldConfig, OptionConfig } from "../types";

export class FilterOptionsBuilder {
    private options: Record<string, OptionConfig> = {};
    private currentKey: string | null = null;

    start(key: string, label: string): this {
        this.currentKey = key;
        this.options[key] = { label, fields: [] };
        return this;
    }

    withClamp(minPlaceholder = 'от', maxPlaceholder = 'до'): this {
        return this.withFields([
            { name: `${this.currentKey}_min`, type: 'number', placeholder: minPlaceholder },
            { name: `${this.currentKey}_max`, type: 'number', placeholder: maxPlaceholder },
        ]);
    }

    withDateRange(fromPlaceholder = 'с', toPlaceholder = 'по'): this {
        return this.withFields([
            { name: `${this.currentKey}_min`, type: 'date', placeholder: fromPlaceholder },
            { name: `${this.currentKey}_max`, type: 'date', placeholder: toPlaceholder },
        ]);
    }

    withSingleValue(name = 'value', type: 'text' | 'number' | 'date' = 'text', placeholder = 'Значение'): this {
        name = this.currentKey!;
        return this.withFields([
            { name, type, placeholder },
        ]);
    }

    withoutFields(): this {
        if (this.currentKey && this.options[this.currentKey]) {
            this.options[this.currentKey].fields = undefined;
        }
        return this;
    }

    build(): Record<string, OptionConfig> {
        const result = this.options;
        this.clear(); 
        return result;
    }

    private clear(): void {
        this.options = {};
        this.currentKey = null;
    }

    private withFields(fields: FieldConfig[]): this {
        if (this.currentKey && this.options[this.currentKey]) {
            this.options[this.currentKey].fields = fields;
        }
        return this;
    }
}