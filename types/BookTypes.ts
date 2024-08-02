export interface Book {
  coverImage: string;
  title: string;
  author: string;
  genre: string[];
  short_description: string;
  description: string;
  recommend?: string;
}