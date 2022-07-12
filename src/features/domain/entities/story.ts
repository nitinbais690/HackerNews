export type StoriesIDType = Array<number>;

export type StoryItem = {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids: Array<number>;
};

export type Stories = Array<StoryItem>;
