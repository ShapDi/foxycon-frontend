import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderRoutersComponent } from '../../widgets/header-routers/header-routers.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderRoutersComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
