import type { Post } from "../models/Post";
import { posts } from "./tempData"

export function getPosts(): Post[] {
  return posts;
}