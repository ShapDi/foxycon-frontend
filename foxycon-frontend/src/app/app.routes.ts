import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ChannelSearchPageComponent } from './pages/channel-search-page/channel-search-page.component';
import { VideoSearchPageComponent } from './pages/video-search-page/video-search-page.component';
import { InspectionVideoPageComponent } from './pages/inspection-video-page/inspection-video-page.component';
import { InspectionChannelPageComponent } from './pages/inspection-channel-page/inspection-channel-page.component';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { canActivateAuth } from './services/auth.service';

export const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [canActivateAuth] },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'channel_search',
        component: ChannelSearchPageComponent,
        canActivate: [canActivateAuth],
      },
      {
        path: 'video_search',
        component: VideoSearchPageComponent,
        canActivate: [canActivateAuth],
      },
      {
        path: 'channel_inspection',
        component: InspectionChannelPageComponent,
        canActivate: [canActivateAuth],
      },
      { path: 'youtube', redirectTo: 'video_search', pathMatch: 'full' },
    ],
  },
  { path: 'auth', component: AuthPageComponent },
];
