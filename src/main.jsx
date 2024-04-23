import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import myCreatedRouter from "./Router/Router";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <RouterProvider router={myCreatedRouter} />
     </React.StrictMode>
);
