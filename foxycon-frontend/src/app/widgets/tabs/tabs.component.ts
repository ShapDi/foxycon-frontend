import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ContentSearchComponent } from './content-search/content-search.component';
import { CardContent } from '../../utils/enums';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements AfterViewInit {
  selectedTab: number = 0;

  tabs = [
    {
      title: 'Поиск видео',
      component: ContentSearchComponent,
      input: CardContent.Video,
    },
    {
      title: 'Поиск каналов',
      component: ContentSearchComponent,
      input: CardContent.Channel,
    },
  ];

  @ViewChild('tabContent', { read: ViewContainerRef })
  tabContent!: ViewContainerRef;

  ngAfterViewInit(): void {
    this.loadComponent(this.selectedTab);
  }

  selectTab(index: number): void {
    this.selectedTab = index;
    this.loadComponent(index);
  }

  loadComponent(index: number): void {
    const tab = this.tabs[index];

    this.tabContent.clear();

    const componentRef = this.tabContent.createComponent(tab.component);

    if ('contentType' in componentRef.instance)
      (componentRef.instance as ContentSearchComponent).contentType = tab.input;

    componentRef.changeDetectorRef.detectChanges();
  }
}
