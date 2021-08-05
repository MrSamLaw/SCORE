import { Link } from "react-router-dom";
import "./nav.scss";

import Auth from "../../utils/auth";

export default function Nav() {
  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  };
  return (
    <section className="navbar">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li className="logo">
              <Link to="/">
                <h1>SCORE!!!</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          {Auth.loggedIn() ? (
            <ul>
              <li>
                <Link to="/round">Round</Link>
              </li>
              <button onClick={logout}>Logout</button>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
