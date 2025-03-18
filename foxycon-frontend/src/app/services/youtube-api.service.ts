import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './youtubeapi.interfece';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  http = inject(HttpClient)
  constructor() { }

  getYoutubeVideos(numberViewsMin: number = 0, numberLikesMin: number = 0): Observable<any> {
    const url = 'http://127.0.0.1:2222/youtube/get_videos?key=B00XgwofN.Aw';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = {
      number_views_min: numberViewsMin,
      number_likes_min: numberLikesMin
    };

    return this.http.post<Video[]>(url, body, { headers: headers });
  }

}


