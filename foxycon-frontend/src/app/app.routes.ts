import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { canActivateAuth } from './services/user-management.service';

export const routes: Routes = [
    {path: '', component: MainComponent, canActivate: [canActivateAuth]},
    {path: 'auth', component:AuthPageComponent}
];
