import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutus from "./Aboutus.jsx";
import Contactus from "./Contactus.jsx";
import Services from "./Services.jsx";
import Counter from "./Counter.jsx";
import store from "./store.js";
import { Provider } from "react-redux";
import Products from "./Products.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Recipes from "./Recipes.jsx";
import RecipeDetails from "./RecipeDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/contact",
        element: <Contactus></Contactus>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        children: [
          {
            path: "/products/productDetails/:id",
            element: <ProductDetails></ProductDetails>,
          },
        ],
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
        children: [
          {
            path: "/recipes/recipeDetails/:id",
            element: <RecipeDetails></RecipeDetails>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>,
);
