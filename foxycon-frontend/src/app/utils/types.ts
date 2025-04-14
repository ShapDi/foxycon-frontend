import { ChannelCardData, VideoCardData } from "../interfaces/cards-interfaces";

export type FieldConfig = {
  name: string;
  type: 'text' | 'number' | 'date';
  placeholder?: string;
}

export type OptionConfig = {
  label: string;
  fields?: FieldConfig[]
}

export type FilterPreset = Record<string, OptionConfig>

export type CardData = VideoCardData | ChannelCardData;