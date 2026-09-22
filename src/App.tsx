import './App.css'
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider } from 'react-router-dom'
import { loadPost, loadPosts } from './controllers/PostController'
import { About } from './views/About'
import { Home } from './views/Home'
import { PostDetails } from './views/PostDetails'
import { Posts } from './views/Posts'

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

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'posts',
        element: <Posts />,
        loader: loadPosts,
      },
      { 
        path: 'posts/:postId', 
        element: <PostDetails />, 
        loader: loadPost 
      },
      { path: 'about', element: <About /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
