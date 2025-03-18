import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  http = inject(HttpClient)
  
  baseApiUrl= 'http://127.0.0.1:2222/user_management'


  login(payload: {username:string, password:string}){

    const fd = new FormData()
    console.log(payload.username)

    fd.append('username', payload.username)
    fd.append('password', payload.password)

    return this.http.post(`${this.baseApiUrl}/token`, fd)

  }

}
