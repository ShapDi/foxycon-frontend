import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ConfigResponse } from './config-service.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);

  private config: ConfigResponse = {
    API_KEY: 'B00XgwofN.Aw',
    // "API_URL": "https://foxyconsystem.ru"
    API_URL: 'https://foxyconweb.ru/back',
  };

  // ngOnInit(){
  //   this.loadConfig()
  // }

  // private loadConfig() {
  //   return lastValueFrom(this.http.get<ConfigResponse>('/config'))
  //     .then(data => this.config = data);
  // }

  get apiUrl(): string {
    return this.config.API_URL;
  }

  get apiKey(): string {
    return this.config.API_KEY;
  }
}
