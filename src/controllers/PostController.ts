import type { LoaderFunctionArgs } from "react-router-dom";
import type { Post } from "../models/Post";
import { getPost, getPosts } from "../services/PostService";

export async function loadPosts(): Promise<Post[]> {
  return await getPosts()
}

export async function loadPost({ params }: LoaderFunctionArgs) {
  return getPost(Number(params.postId))
}