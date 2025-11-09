import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recepies/Recipes";
import CartList from "../pages/CartList/CartList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "recipes",
        Component: Recipes,
      },
      {
        path: "cartList",
        Component: CartList,
      },
    ],
  },
]);
