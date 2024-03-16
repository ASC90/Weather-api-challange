import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { FormValidation } from "./routes/FormValidation";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <div>Hello world!</div>
      </DefaultLayout>
    ),
  },
  {
    path: "/form",
    element: (
      <DefaultLayout>
        <FormValidation />
      </DefaultLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
