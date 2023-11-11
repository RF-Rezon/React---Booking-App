import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Page";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
  ]);