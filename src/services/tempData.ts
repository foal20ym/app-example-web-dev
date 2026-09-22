import type { Post } from "../models/Post";

export const posts: Post[] = [
  {
    id: 1,
    title: "Learning React",
    author: "Alice",
    content: "React makes it easy to build interactive user interfaces.",
    publishedDate: Date.now().toString(),
  },
  {
    id: 2,
    title: "Why TypeScript?",
    author: "Bob",
    content: "TypeScript adds static typing to JavaScript.",
    publishedDate: Date.now().toString(),
  },
  {
    id: 3,
    title: "Understanding MVC",
    author: "Charlie",
    content: "MVC separates an application into different responsibilities.",
    publishedDate: Date.now().toString(),
  }
];