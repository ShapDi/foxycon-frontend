import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-routers',
  imports: [],
  standalone: true,
  templateUrl: './header-routers.component.html',
  styleUrl: './header-routers.component.scss',

})
export class HeaderRoutersComponent {
  router = inject(Router)

  onClick(target: string){
    this.router.navigate([target])
  }
}
