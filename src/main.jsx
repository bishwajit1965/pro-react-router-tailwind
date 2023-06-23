import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import ErrorPage from "./components/notFound/ErrorPage";
import BookStore from "./components/bookStore/BookStore";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import BookDetails from "./components/bookDetails/BookDetails";
import SpinnerLoader from "./components/spinnerLoader/SpinnerLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BookStore />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "loader",
        element: <SpinnerLoader />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
