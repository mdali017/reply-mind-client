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
import UpdateDocument from "../Pages/Dashboard/Shared/UpdateDocument";
import CreateDocument from "../Pages/Dashboard/Shared/CreateDocument";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
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
      {
        path: "update/:id",
        element: <UpdateDocument></UpdateDocument>,
      },
      {
        path: "add-document",
        element: <CreateDocument></CreateDocument>,
      },
    ],
  },
]);
