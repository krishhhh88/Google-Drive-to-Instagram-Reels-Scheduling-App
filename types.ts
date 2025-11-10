
export interface Video {
  id: string;
  name: string;
  thumbnailUrl: string;
  duration: number; // in seconds
}

export interface QueuedItem {
  id: string;
  video: Video;
  caption: string;
  hashtags: string;
}

export interface Schedule {
  [key: string]: {
    enabled: boolean;
    times: string[];
  };
}

export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';
