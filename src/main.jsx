import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Counter from "./features/counter/Counter.jsx";
import TodoList from "./features/todolist/TodoList.jsx";
import Products from "./features/product/Products.jsx";
import Home from "./components/Home.jsx";
import ProductDetails from "./features/product/ProductDetails.jsx";
import AddProductForm from "./features/product/AddProductForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/counter",
        element: <Counter></Counter>,
      },
      {
        path: "/todolist",
        element: <TodoList></TodoList>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/addProduct",
        element: <AddProductForm></AddProductForm>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
