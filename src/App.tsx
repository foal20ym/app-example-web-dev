import './App.css'
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider, useLoaderData } from 'react-router-dom'
import type { LoaderFunctionArgs } from 'react-router-dom'
import PostList from './views/PostList'
import { getPosts } from './services/PostService'
import type { Post } from './models/Post'

function RootLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">Router Notes</Link>
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}

function Home() {
  return (
    <section className="hero-panel">
      <p className="eyebrow">Data mode</p>
      <h1>Load route data before rendering.</h1>
      {/* <p>This page uses a loader and a child route with React Router&apos;s data APIs.</p> */}

      <Link className="primary-link" to="/posts">
        Browse the posts <span aria-hidden="true">-&gt;</span>
      </Link>
      
    </section>
  )
}

function Posts() {
  const posts = useLoaderData() as Post[]

  return (
    <>
      <PostList posts={posts} />
      <Outlet />
    </>
  )
}

function PostDetails() {
  // const post = useLoaderData() as Post | undefined
  const post = useLoaderData()

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

function About() {
  return (
    <section className="text-panel">
      <p className="eyebrow">About this example</p>
      <h1>Small routes, clear ownership.</h1>
      <p>The URL, navigation state, and rendered screen are all connected through declarative route definitions.</p>
    </section>
  )
}

function loadPosts() {
  return getPosts()
}

function loadPost({ params }: LoaderFunctionArgs) {
  return getPosts().find((post) => post.id === Number(params.postId))
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        element: <Posts />,
        loader: loadPosts,
        children: [
          { path: ':postId', element: <PostDetails />, loader: loadPost },
        ],
      },
      { path: 'about', element: <About /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
