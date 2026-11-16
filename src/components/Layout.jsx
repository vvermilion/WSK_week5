import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul id='nav'>
            <li class='nav-item'>
              <Link to="/">Home</Link>
            </li>
            <li class='nav-item'>
              <Link to="/profile">Profile</Link>
            </li>
            <li class='nav-item'>
              <Link to="/upload">Upload</Link>
            </li>
            <li class='nav-item'>
              <Link to='/login'>Login</Link>
            </li>
            <li class='nav-item'>
              <Link to='Demo'>Demo</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>This is my page!</p>
      </footer>
    </>
  );
}

export default Layout
