import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import ListBooks from "./components/ListBooks.jsx";
import PagesToRead from "./components/PagesToRead.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./components/ErrorPage.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listBooks",
        loader: () => fetch("booksData.json"),
        element: <ListBooks></ListBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/productDetail/:productId",
        loader: () => fetch("booksData.json"),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ToastContainer />
      <RouterProvider router={route}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
