import { Link } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  return (
    <section className="navbar">
      <div className="wrapper">
        <div className="left">
          <ul>
            <li>
              <Link to="/">
                <h1>SCORE!!!</h1>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
