import type { Post } from "../models/Post";
import { getPosts } from "../services/PostService";

export function getAllPosts(): Post[] {
  return getPosts();
}