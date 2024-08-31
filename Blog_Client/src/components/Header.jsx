import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/" className="logo-span">
        <img src="logo.svg" alt="Header Logo" />
        DEZIRE
      </Link>
      <menu>
        <Link to="/login" className="a secondary">
          Login
        </Link>
        <Link to="/register" className="a">
          Register
        </Link>
      </menu>
    </header>
  );
}
