import { useLoaderData, Link } from "react-router-dom"
import type { Post } from "../models/Post"

export function PostDetails() {
  const post = useLoaderData() as Post | undefined

  if (!post) {
    return (
      <section className="empty-state">
        <h1>Post not found</h1>
        <Link to="/posts">Back to posts</Link>
      </section>
    )
  }

  return (
    <article className="post-detail">
      <Link className="back-link" to="/posts">&lt;- All posts</Link>
      <p className="eyebrow">Post {post.id}</p>
      <h1>{post.title}</h1>
      <p className="post-meta">Written by {post.author}</p>
      <p>{post.content}</p>
    </article>
  )
}

