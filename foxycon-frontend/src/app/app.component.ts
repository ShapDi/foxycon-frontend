import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {HeaderRoutersComponent} from './widgets/header-routers/header-routers.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foxycon-frontend';

}
