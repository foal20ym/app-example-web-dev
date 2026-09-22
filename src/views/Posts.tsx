import { useLoaderData } from "react-router-dom"
import type { Post } from "../models/Post"
import PostList from "./PostList"

export function Posts() {
  const posts = useLoaderData() as Post[]

  return <PostList posts={posts} />
}