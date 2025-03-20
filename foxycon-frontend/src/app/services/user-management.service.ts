import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { TokenResponse } from './user-management.interfece';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  http = inject(HttpClient)
  
  baseApiUrl= 'http://127.0.0.1:2222/user_management'

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

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post<TokenResponse>(`${this.baseApiUrl}/token`, fd

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