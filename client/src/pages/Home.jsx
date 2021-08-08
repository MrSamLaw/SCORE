import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <main className="sections">
      <div className="container">
        <p>Welcome to SCORE!!!</p>
        <p>Please login to admin your competition</p>

        <Link to="/login">LOGIN</Link>
      </div>
    </main>
  );
}
