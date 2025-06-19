import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartFormat',
  standalone: true,
})
export class SmartFormatPipe implements PipeTransform {
  transform(value: unknown): string {
    if (typeof value === 'number') {
      return this.formatNumber(value);
    }

    if (typeof value === 'string' && this.isDate(value)) {
      const date = new Date(value);
      return isNaN(date.getTime()) ? value : this.formatDate(date);
    }

    return String(value);
  }

  private formatNumber(num: number): string {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }

  private formatDate(date: Date): string {
    return date.toLocaleDateString('ru-RU');
  }

  private isDate(value: string): boolean {
    const timestamp = Date.parse(value);
    return !isNaN(timestamp);
  }
}
