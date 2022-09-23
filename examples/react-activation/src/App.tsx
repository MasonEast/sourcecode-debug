import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

import KeepAlive from "react-activation";
import { useState } from "react";

function Counter({ text }: any) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>
        {text} count: {count}
      </p>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </div>
  );
}

function Alive() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      {show && (
        <KeepAlive cacheKey="aaa">
          <Counter text="keepAlive" />
        </KeepAlive>
      )}
      {show && <Counter />}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Alive />
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
