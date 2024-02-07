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

// import CategoryPage from './pages/CategoryPage';

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
        children: [
          // {
          //   path: "/catalogue/:categoryId",
          //   element: <CategoryPage />,
          // },
        ],
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
