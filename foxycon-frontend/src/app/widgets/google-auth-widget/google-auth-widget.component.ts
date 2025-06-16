import { Component, inject, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login"; 
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-auth-widget',
  imports: [GoogleSigninButtonModule, CommonModule],
  templateUrl: './google-auth-widget.component.html',
  styleUrl: './google-auth-widget.component.css',
  standalone: true
})
export class GoogleAuthWidgetComponent implements OnInit{
  authService: AuthService = inject(AuthService)
  user!: SocialUser;
  loggedIn!: boolean;
  private isUserFetched = false;
  constructor(private authServiceGoggle: SocialAuthService, private httpClient: HttpClient) { 
  }

    router: Router = inject(Router)

  ngOnInit() {
    this.authServiceGoggle.authState.subscribe((user) => {
      // Если пользователь уже был загружен, не выполняем дополнительные действия
      if (!this.isUserFetched && user) {
        this.user = user;
        this.loggedIn = true;
        console.log('User:', user);

        this.isUserFetched = true; // Устанавливаем флаг, чтобы не выполнять снова
      } else if (!user) {
        this.loggedIn = false;
        this.isUserFetched = false; // Сбрасываем флаг, если пользователь вышел
      }
      this.authService.login({id_token:this.user.idToken}).subscribe(res => {
        this.router.navigate([''])
      })
    });
  }

  

}