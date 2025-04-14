import { YoutubeChannel, YouTubeVideo } from "../services/youtubeapi.interfece";
import { Card } from "../utils/enums";

export interface BaseCardData{
    type: Card;
}

export interface VideoCardData extends BaseCardData{
    video: YouTubeVideo
}

export interface ChannelCardData extends BaseCardData{
    channel: YoutubeChannel
}