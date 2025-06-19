import { YoutubeChannel, YouTubeVideo } from '../services/youtubeapi.interfece';
import { CardContent } from '../utils/enums';

export interface BaseCardData {
  type: CardContent;
}

export interface VideoCardData extends BaseCardData {
  video: YouTubeVideo;
}

export interface ChannelCardData extends BaseCardData {
  channel: YoutubeChannel;
}
