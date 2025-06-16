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
  type_contents: any[];
  type_formats: TypeFormat[];
}

export interface VideoResponse {
  count: number;
  content: YouTubeVideo[];
}

export interface CountrySystemYoutube {
  name: string;
  id: string;
}

export interface YoutubeChannel {
  youtube_id: string;
  id: string;
  name_channel: string;
  updating_data: string | null;
  number_subscribers: number;
  created_at: string;
  link_channel: string;
  add_data: string;
  total_views: number;
  number_video: number;
  country_system_youtube: CountrySystemYoutube[];
}

export interface YoutubeChannelResponse {
  count: number;
  content: YoutubeChannel[];
}
