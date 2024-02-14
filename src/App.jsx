import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Catalogue, { loader as catalogueLoader } from "./pages/Catalogue";
import Contact from "./pages/Contact";
import Error from "./components/Error";
import CategoryPage, {
  loader as categoryPageLoader,
} from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      {
        index: true,
        element: <Navigate replace to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/app",
        element: <AppLayout />,
        errorElement: <Error />,

        children: [
          {
            path: "/app/home",
            element: <Home />,
          },
          {
            path: "/app/catalogue",
            element: <Catalogue />,
            loader: catalogueLoader,
          },
          {
            path: "/app/catalogue/:categoryId",
            element: <CategoryPage />,
            loader: categoryPageLoader,
          },
          {
            path: "/app/offers",
            element: <Offers />,
          },

          {
            path: "/app/contact",
            element: <Contact />,
          },
          {
            path: "/app/cart",
            element: <Cart />,
          },
          {
            path: "/app/account",
            element: <Account />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
