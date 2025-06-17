import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponse } from './user-management.interfece';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  http = inject(HttpClient)
  config = inject(ConfigService)
  
  baseApiUrl= `${this.config.apiUrl}/user_management`

  cookerServece = inject(CookieService)
  token:string | null = null 

  get isAuth() {
    if (!this.token) {
      this.token = this.cookerServece.get('token')
    }
    return !!this.token

  }



  login(payload: {username:string, password:string}){

    const fd = new FormData()
    console.log(payload.username)

    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', payload.username);
    body.set('password', payload.password);
    body.set('scope', '');
    body.set('client_id', 'string');
    body.set('client_secret', 'string');
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post<TokenResponse>(`${this.baseApiUrl}/token`, body,{ headers: headers }

    ).pipe(tap(val => {
      this.token = val.access_token
      
      this.cookerServece.set('token', this.token)

    }))

  }

}

export const canActivateAuth = () => {
  const isLoggedIn = inject(UserManagementService).isAuth

  if (isLoggedIn) {
    return true
  }

  return inject(Router).createUrlTree(['/auth'])
}