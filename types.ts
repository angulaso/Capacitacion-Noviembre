
export interface Speaker {
  name: string;
  time: string;
  imageUrl: string;
  country: 'bo' | 'pe';
}

export interface DaySchedule {
  day: string;
  date: string;
  speakers: Speaker[];
}