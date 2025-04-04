import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserManagementService } from '../../services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  imports: [ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
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
