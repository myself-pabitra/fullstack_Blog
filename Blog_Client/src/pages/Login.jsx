import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="loginContainer">
      <div className="loginForm">
        <h1>Welcome Back!</h1>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <Link className="forgot-password" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
    </main>
  );
}
