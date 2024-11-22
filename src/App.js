import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

const  MenuContext = React.createContext()


export default function App() {

  const [menuItem, setMenuItem] = React.useState(0);


  return (
    <div>
      <h1>Basic Example</h1>

      <p>
          <h3>menuItem = {menuItem}</h3>
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <MenuContext.Provider value={{menuItem, setMenuItem}}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />} />

              {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </MenuContext.Provider>
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
  const  {menuItem, setMenuItem} = React.useContext(MenuContext);
  setMenuItem(1);
  return (
    <div>
      <h2>Home</h2>
      <p>
        <h5>menuItem = {menuItem}</h5>
      </p>
    </div>
  );
}

function About() {
  const  {menuItem, setMenuItem} = React.useContext(MenuContext);
  setMenuItem(2);
  return (
    <div>
      <h2>About</h2>
      <p>
        <h5>menuItem = {menuItem}</h5>
      </p>
    </div>
  );
}

function Dashboard() {
  const  {menuItem, setMenuItem} = React.useContext(MenuContext);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        <h5>menuItem = {menuItem}</h5>
      </p>
    </div>
  );
}

function NoMatch() {
  const  {menuItem, setMenuItem} = React.useContext(MenuContext);
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <h2>Dashboard</h2>
      <p>
        <h5>menuItem = {menuItem}</h5>
      </p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}




