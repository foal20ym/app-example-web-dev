import { Link } from "react-router-dom";

export function Home() {
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