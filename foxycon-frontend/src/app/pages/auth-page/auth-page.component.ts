import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';
import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, GoogleSigninButtonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',
})
export class AuthPageComponent {
  authService: AuthService = inject(AuthService);
  user!: SocialUser;
  loggedIn!: boolean;
  private isUserFetched = false;
  constructor(
    private authServiceGoggle: SocialAuthService,
    private httpClient: HttpClient
  ) {}

  router: Router = inject(Router);

  ngOnInit() {
    this.authServiceGoggle.authState.subscribe((user) => {
      if (!this.isUserFetched && user) {
        this.user = user;
        this.loggedIn = true;
        console.log('User:', user);

        this.isUserFetched = true;
      } else if (!user) {
        this.loggedIn = false;
        this.isUserFetched = false;
      }
      this.authService
        .login({ id_token: this.user.idToken })
        .subscribe((res) => {
          this.router.navigate(['']);
        });
    });
  }
}
