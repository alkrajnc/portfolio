import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./routes/projects.jsx";
import Cv from "./routes/cv.jsx";
import projectLoader from "./loaders.js";
import Project from "./routes/project.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:projectId",
    element: <Project />,
    loader: projectLoader,
  },
  {
    path: "/cv",
    element: <Cv />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
