import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video, VideoResponse, YouTubeChannel, YouTubeVideo } from './youtubeapi.interfece';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  http = inject(HttpClient)
  constructor() { }

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


  
  getYoutubeChannel(channel_data: {
    name_channel:string | null, 
    link_channel:string| null,
    number_views_min:number,
    number_views_max:number| null,
    add_data_min:string| null,
    add_data_max:string| null,
    number_subscribers_min:number| null,
    number_subscribers_max:number| null,
    number_video_min:number| null,
    number_video_max:number| null,
    created_at_min:string| null,
    created_at_max:string| null,
  }
    
    
  ): Observable<any> {
    const url = 'https://foxyconsystem.ru/youtube/get_channels?key=B00XgwofN.Aw';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = channel_data;
    // <Video[]>
    return this.http.post<YouTubeChannel[]>(url, body, { headers: headers });
  }

  getYoutubeVideo(video_data: {
    title:string | null, 
    number_views_min:number| null,
    number_views_max:number| null,
    number_likes_min:number| null,
    number_likes_max:number| null,
    release_date_min:string | null,
    release_date_max:string | null,
    add_data_min:string | null,
    add_data_max:string | null,
    offset:number | null | undefined,
    limit:number | null | undefined,
  },
  offset:number,
  limit:number): Observable<any> {
    const url = 'https://foxyconsystem.ru/youtube/get_videos?key=B00XgwofN.Aw';
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    var data = video_data;
    data['offset'] = offset;
    data['limit'] = limit;
    console.log(data);
    const body = data;
    // <Video[]>
    return this.http.post<VideoResponse>(url, body, { headers: headers });
  }

  inspectionChannel(link:{
    link:string | null
  }){
    const headers = new HttpHeaders({
      'accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const body = link;
    const url = 'https://foxyconsystem.ru/youtube/inspection_channel_org?key=B00XgwofN.Aw';
    return this.http.post(url, body, { headers: headers });
  }

}


