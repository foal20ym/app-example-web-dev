import type { Post } from "../models/Post";
import axios from "axios";

export async function getPosts(): Promise<Post[]> {
  const response = axios<Post[]>("http://localhost:8080/posts")
  return (await response).data
}

export async function getPost(postId: number): Promise<Post> {
  const response = axios<Post>(`http://localhost:8080/posts/${postId}`)
  return (await response).data
}
