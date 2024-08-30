// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Outlet will render the appropriate child route here */}
      </main>
    </div>
  );
}
