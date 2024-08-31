import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Content from "./pages/Content.jsx";
import "./index.scss";
import Layout from "./components/Layout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const routers = [
  {
    path: "/",
    element: <Layout />, // Layout component that includes Header and Outlet
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "blog/:id",
        element: <Content />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const router = createBrowserRouter(routers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
