import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';
import {GoogleAuthWidgetComponent} from '../../widgets/google-auth-widget/google-auth-widget.component'

import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';


@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, GoogleAuthWidgetComponent,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
  ],
  templateUrl: './auth-page.component.html',
  styleUrls:['./auth-page.component.less', './auth-page.component.css', ], 
})
export class AuthPageComponent {
  authService = inject(UserManagementService)
  router: Router = inject(Router)

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  onSubmit() {
    if (this.form.valid){
      console.log(this.form.value)
        //@ts-ignore
      this.authService.login(this.form.value).subscribe(res => {
        this.router.navigate([''])
      })

    }

  }
}
