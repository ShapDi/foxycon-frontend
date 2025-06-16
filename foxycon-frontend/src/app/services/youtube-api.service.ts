import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  VideoResponse,
  YoutubeChannel,
  YouTubeVideo,
} from './youtubeapi.interfece';
import { ConfigService } from './config.service';
import { Operation, SocialMedia } from '../utils/enums';
import {
  YouTubeChannelFilter,
  YouTubeVideoFilter,
} from '../interfaces/db-requests-interfaces';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  http = inject(HttpClient);
  config = inject(ConfigService);
  constructor() {}

  // getYoutubeVideos(numberViewsMin: number = 0, numberLikesMin: number = 0): Observable<any> {
  //   const url = 'http://127.0.0.1:2222/youtube/get_videos?key=B00XgwofN.Aw';
  //   const headers = new HttpHeaders({
  //     'accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   });
  //   const body = {
  //     number_views_min: numberViewsMin,
  //     number_likes_min: numberLikesMin
  //   };

  //   return this.http.post<Video[]>(url, body, { headers: headers });
  // }

  getYoutubeChannel(
    channel_data: Partial<YouTubeChannelFilter>,
    offset: number,
    limit: number
  ): Observable<any> {
    const url = `${this.config.apiUrl}/${SocialMedia.YoutTube}/${Operation.GetChannels}?key=${this.config.apiKey}`;
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
    });
    var data = channel_data;
    data['offset'] = offset;
    data['limit'] = limit;
    console.log(data);
    const body = data;
    return this.http.post<YoutubeChannel[]>(url, body, { headers: headers });
  }

  getYoutubeVideo(
    video_data: Partial<YouTubeVideoFilter>,
    offset: number,
    limit: number
  ): Observable<any> {
    const url = `${this.config.apiUrl}/${SocialMedia.YoutTube}/${Operation.GetVideos}?key=${this.config.apiKey}`;
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
    });
    var data = video_data;
    data['offset'] = offset;
    data['limit'] = limit;
    console.log(data);
    const body = data;
    return this.http.post<VideoResponse>(url, body, { headers: headers });
  }

  inspectionChannel(link: { link: string | null }) {
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
    });
    const body = link;
    const url = `${this.config.apiUrl}/${SocialMedia.YoutTube}/${Operation.InspectChannel}?key=${this.config.apiKey}`;
    return this.http.post(url, body, { headers: headers });
  }
}
