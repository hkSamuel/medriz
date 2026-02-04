
export interface ArticleData {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  accentColor: string;
  icon: string;
}

export enum PageRoute {
  HOME = '/',
  ARTICLE_1 = '/article/ancient',
  ARTICLE_2 = '/article/middle-ages',
  ARTICLE_3 = '/article/modern',
  ARTICLE_4 = '/article/future',
  ABOUT = '/about',
  MEME = '/meme'
}
