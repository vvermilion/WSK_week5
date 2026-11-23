import {Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin, handleLogout} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
    // The copied provider recreates handleAutoLogin on each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <h1>My super media app</h1>
        <nav id="nav">
          <div className="nav-greeting">Hei {user?.username ?? 'vierailija'}!</div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/demo">Demo</Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/upload">Upload</Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-logout"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            )}
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
};

export default Layout;
