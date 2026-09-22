/**
The Model is responsible for the structure of our data.
**/

export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  publishedDate: string;
  updatedAt?: string | null;
}

