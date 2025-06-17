import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { canActivateAuth } from './services/auth.service';
import { ChannelSearchPageComponent } from './pages/channel-search-page/channel-search-page.component';
import { VideoSearchPageComponent } from './pages/video-search-page/video-search-page.component';
import { InspectionVideoPageComponent } from './pages/inspection-video-page/inspection-video-page.component';
import { InspectionChannelPageComponent } from './pages/inspection-channel-page/inspection-channel-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
    {path: '', component: MainComponent, canActivate: [canActivateAuth]},
    {path: 'channel_search', component:ChannelSearchPageComponent, canActivate: [canActivateAuth]},
    {path: 'video_search', component:VideoSearchPageComponent, canActivate: [canActivateAuth]},
    {path: 'channel_inspection', component:InspectionChannelPageComponent, canActivate: [canActivateAuth]},
    {path: 'auth', component:AuthPageComponent},
    {path: 'new_search', component:SearchPageComponent, canActivate: [canActivateAuth]}
];
