import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';
import {GoogleAuthWidgetComponent} from '../../widgets/google-auth-widget/google-auth-widget.component'

import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule, GoogleAuthWidgetComponent,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
  ],
  templateUrl: './auth-page.component.html',
  styleUrls:['./auth-page.component.less', './auth-page.component.css', ], 
})
export class AuthPageComponent {
}
