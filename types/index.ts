export interface PostTranslationI {
  _id: string;
  post: string; // Referencia al ID del post padre
  language: string;
  title: string;
  description: string;
  content: string;
  __v: number;
}

export interface PostI {
  _id: string;
  slug: string;
  publishedAt: Date;
  translations: PostTranslationI[];
  __v: number;
}