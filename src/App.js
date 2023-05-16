import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Pages/Root/root";
import ErrorPage from "./Pages/Error/error";
import HomePage from "./Pages/Home/home.page";
import UsersPage from "./Pages/Users/users.page";
import PlacePage from "./Pages/Place/place.page";
import AddPlacePage from "./Pages/AddPlace/add-place.page";
import { ScrollContextProvider } from "./Context/scroll.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/:userId/places",
        element: <PlacePage />,
      },
      {
        path: "/auth",
        element: "",
      },
      {
        path: "/profile",
        element: "",
      },
      {
        path: "/add-place",
        element: <AddPlacePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ScrollContextProvider>
      <RouterProvider router={router} />
    </ScrollContextProvider>
  );
};

export default App;
