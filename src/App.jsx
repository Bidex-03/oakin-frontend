import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
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

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalogue",
        element: <Catalogue />,
        loader: catalogueLoader,
      },
      {
        path: "/catalogue/:categoryId",
        element: <CategoryPage />,
        loader: categoryPageLoader,
      },
      {
        path: "/offers",
        element: <Offers />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
