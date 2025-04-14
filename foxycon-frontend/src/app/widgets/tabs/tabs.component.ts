import { AfterViewInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { VideoSearchComponent } from './video-search/video-search.component';
import { ChannelSearchComponent } from './channel-search/channel-search.component';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent implements AfterViewInit {
  selectedTab:number = 0;

  tabs = [
    {title: 'Поиск видео', component: VideoSearchComponent},
    {title: 'Поиск канала', component: ChannelSearchComponent}
  ]

  @ViewChild('tabContent', { read: ViewContainerRef }) tabContent!: ViewContainerRef;

  ngAfterViewInit(): void {
    this.loadComponent(this.selectedTab);
  }

  selectTab(index: number): void{
    this.selectedTab = index;
    this.loadComponent(index);
  }

  loadComponent(index: number): void{
    const tab = this.tabs[index];

    this.tabContent.clear();
    this.tabContent.createComponent(tab.component);
  }
}
