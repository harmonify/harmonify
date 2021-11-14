export interface ExperienceInterface {
  title: string;
  titleLink?: string;
  subtitle: string;
  date: string;
  description: string;
  items: {
    name: string,
    link?: string,
  }[];
  location?: string;
}
