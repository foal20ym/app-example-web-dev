import type { Post } from "../models/Post";
import { Link } from "react-router-dom";

// Själva view'n som visar blogposts. Innehåller ingen logik, bara visuellt.

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <section className="posts-page">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Route: /posts</p>
          <h1>Blog posts</h1>
        </div>
        <span className="post-count">{posts.length} posts</span>
      </div>

      <div className="post-grid">
        {posts.map((post) => (
          <Link className="card-link" to={`/posts/${post.id}`}>
          <article className="post-card" key={post.id}>
            <h2>{post.title}</h2>

            <p>
              <strong>Author:</strong> {post.author}
            </p>

            <p>{post.content}</p>
          </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PostList;