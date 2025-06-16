export interface BaseFilter {
  offset?: number;
  limit?: number;
}

export interface YouTubeVideoFilter extends BaseFilter {
  title?: string;
  number_views_min?: number;
  number_views_max?: number;
  number_likes_min?: number;
  number_likes_max?: number;
  release_date_min?: string;
  release_date_max?: string;
  add_data_min?: string;
  add_data_max?: string;
  location?: string;
}

export interface YouTubeChannelFilter extends BaseFilter {
  name_channel?: string;
  link_channel?: string;
  number_views_min?: number;
  number_views_max?: number;
  add_data_min?: string;
  add_data_max?: string;
  number_subscribers_min?: number;
  number_subscribers_max?: number;
  number_video_min?: number;
  number_video_max?: number;
  created_at_min?: string;
  created_at_max?: string;
  location?: string;
}
