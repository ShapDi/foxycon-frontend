export interface Video {
    id: string
    channel_id: string
    system_id: string   
    title:string
    link: string
    views: number
    likes:number
    release_date: string
    updating_data: string | null
    updating_time: string | null
    add_data: string | null
    add_time: string | null
}


export interface CountrySystemYouTube {
    name: string | null;
    id: string;
  }
  
  export interface YouTubeChannel {
    link_channel: string;
    add_data: string;
    total_views: number;
    number_video: number;
    youtube_id: string;
    id: string;
    name_channel: string;
    updating_data: string | null;
    number_subscribers: number;
    created_at: string;
    country_system_youtube: CountrySystemYouTube[];
  }


export interface TypeFormat {
  id: string;
  name: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  views: number;
  release_date: string;
  updating_time: string | null;
  add_time: string;
  channel_id: string;
  system_id: string;
  link: string;
  likes: number;
  updating_data: string | null;
  add_data: string;
  type_contents: any[]; // Если тип содержимого неизвестен, можно использовать `any[]`
  type_formats: TypeFormat[];
}


export interface VideoItem {
  id: string;
  title: string;
  views: number;
  release_date: string;
  updating_time: string | null;
  add_time: string;
  channel_id: string;
  system_id: string;
  link: string;
  likes: number;
  updating_data: string | null;
  add_data: string;
  type_formats: any[]; // Можно заменить на конкретный тип, если известна структура
  type_contents: any[]; // Можно заменить на конкретный тип, если известна структура
}

export interface VideoResponse {
  count: number;
  content: VideoItem[];
}