import type { LoaderFunctionArgs } from "react-router-dom";
import type { Post } from "../models/Post";
import { getPosts } from "../services/PostService";

export function loadPosts(): Post[] {
  return getPosts()
}

export function loadPost({ params }: LoaderFunctionArgs) {
  return getPosts().find((post) => post.id === Number(params.postId))
}