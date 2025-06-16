import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { TokenResponse } from './user-management.interfece';

import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http:HttpClient = inject(HttpClient)
  config = inject(ConfigService)
  cookerServece = inject(CookieService)
  baseApiUrl: string = `${this.config.apiUrl}/user_services/authorization`

  access_token: string |null = null
  refresh_token: string |null = null
  
  get isAuth() {
    if (!this.access_token) {
      this.access_token = this.cookerServece.get('access_token')
    }
    return !!this.access_token

  }

  login(idToken: {id_token:string | null}){

    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = idToken;

    return this.http.post<TokenResponse>(
      `${this.baseApiUrl}/token`,body,{ headers: headers }
    ).pipe(
      tap(val => {
        this.access_token = val.access_token
        this.refresh_token = val.refresh_token

        this.cookerServece.set("access_token", this.access_token)
        this.cookerServece.set("refresh_token", this.refresh_token)
      })
    )
  }

}

export const canActivateAuth = () => {
  const isLoggedIn = inject(AuthService).isAuth

  if (isLoggedIn) {
    return true
  }

  return inject(Router).createUrlTree(['/auth'])
}