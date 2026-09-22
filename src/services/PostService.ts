import type { Post } from "../models/Post";

/** 
The service deal with external systems.
This keeps API code out of both controllers and views.
**/

// export async function getPosts(): Promise<Post[]> {
//   const response = await fetch("/api/posts");

//   if (!response.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return response.json();
// }


const posts: Post[] = [
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

export function getPosts(): Post[] {
  return posts;
}

/*
Till en början kanske det känns onödigt att ha en fil bara för att hämta posts.
Men när man implementerar mer funktionalitet så ser man snabbt fördelen.
*/
export function getAllPosts(): Post[] {
  const posts = getPosts();

  return posts.sort((a, b) => b.id - a.id);
}

export function getPostsByAuthor(author: string): Post[] {
  const posts = getPosts();

  return posts.filter(post => post.author === author);
}