import { Link } from "react-router-dom";
import "./home.scss";

import Auth from "../utils/auth";

export default function Home() {
  return (
    <main className="sections">
      <div className="container">
        {Auth.loggedIn() ? (
          <div>
            <p>
              What would you like to do today {Auth.getProfile().data.username}?
            </p>
          </div>
        ) : (
          <div>
            <p>Welcome to SCORE!!!</p>
            <p>Please login to admin your competition</p>

            <p>
              <Link to="/login">LOGIN</Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
