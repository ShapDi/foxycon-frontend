import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenResponse } from './user-management.interfece';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  config = inject(ConfigService);
  cookieService = inject(CookieService);
  baseApiUrl: string = `${this.config.apiUrl}/user_services/authorization`;

  access_token: string | null = null;
  refresh_token: string | null = null;

  get isAuth() {
    if (!this.access_token) {
      this.access_token = this.cookieService.get('access_token');
    }
    return this.access_token;
  }

  get token_access_token() {
    if (!this.access_token) {
      this.access_token = this.cookieService.get('access_token');
    }
    return this.access_token;
  }

  refresh() {
    var access_token_old: string;
    var refresh_token_old: string;
    access_token_old = this.cookieService.get('access_token');
    refresh_token_old = this.cookieService.get('refresh_token');
    var body;
    body = {
      access_token: access_token_old,
      refresh_token: refresh_token_old,
    };
    console.log(body);
    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}/refresh`, body)
      .pipe(
        tap((val) => {
          this.access_token = val.access_token;
          this.refresh_token = val.refresh_token;
          console.log(this.access_token);
          this.cookieService.set('access_token', this.access_token);
          this.cookieService.set('refresh_token', this.refresh_token);
        })
      );
  }

  login(idToken: { id_token: string | null }) {
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
    });

    const body = idToken;

    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}/token`, body, {
        headers: headers,
      })
      .pipe(
        tap((val) => {
          this.access_token = val.access_token;
          this.refresh_token = val.refresh_token;

          this.cookieService.set('access_token', this.access_token);
          this.cookieService.set('refresh_token', this.refresh_token);
        })
      );
  }
}

export const canActivateAuth = () => {
  const isLoggedIn = inject(AuthService).isAuth;

  if (!!isLoggedIn) {
    return true;
  }

  return inject(Router).createUrlTree(['/auth']);
};
