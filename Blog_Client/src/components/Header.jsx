import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <span className="logo-span">
        <img src="logo.svg" alt="Header Logo" />
        DEZIRE
      </span>
      <menu>
        <Link to="/login" className="a secondary">
          Login
        </Link>
        <a href="#" className="a">
          Register
        </a>
      </menu>
    </header>
  );
}
