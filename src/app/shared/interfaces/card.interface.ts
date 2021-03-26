interface NextLesson {
  date: string;
  time: string;
}

export interface ICardInfo {
  img: string;
  lastLesson?: string;
  color: string;
  subject: string;
  name: string;
  nextLesson: NextLesson;
}
