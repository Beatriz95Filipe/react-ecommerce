import App from './App.jsx'

import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useFetchCategories from './hooks/useFetchCategories.js';

import Homepage from "./routes/Homepage/Homepage";
import CategoryPage from "./routes/CategoryPage/CategoryPage";
import ProductPage from "./routes/ProductPage/ProductPage";
import Root from "./routes/Root.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
        // children: [
        //   {
        //     path: "/product/:id",
        //     element: <ProductPage />
        //   }
        // ] não consigo criar rota children, dá erro de "absolute child route path"
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      }
    ]
  }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
