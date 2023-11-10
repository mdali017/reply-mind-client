import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import DashboardPage from "../Pages/Dashboard/Dashborad/Dashboard";
import GrouthMarketing from "../Pages/Dashboard/GrouthMarketing/GrouthMarketing";
import DigitalMarketing from "../Pages/Dashboard/DigitalMarketing/DigitalMarketing";
import ProductMarketing from "../Pages/Dashboard/ProductMarketing/ProductMarketing";
import PaidMarketing from "../Pages/Dashboard/PaidMarketing/PaidMarketing";
import OrganicMarketing from "../Pages/Dashboard/OrganicMarketing/OrganicMarketing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage></DashboardPage>,
      },
      {
        path: "grouth-marketing",
        element: <GrouthMarketing />,
      },
      {
        path: "digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "product-marketing",
        element: <ProductMarketing />,
      },
      {
        path: "paid-marketing",
        element: <PaidMarketing />,
      },
      {
        path: "organic-marketing",
        element: <OrganicMarketing />,
      },
    ],
  },
]);
