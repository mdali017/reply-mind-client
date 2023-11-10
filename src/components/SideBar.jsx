import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/dashboard/grouth-marketing",
    title: "grouth marketing",
  },
  {
    path: "/dashboard/digital-marketing",
    title: "digital marketing",
  },
  {
    path: "/dashboard/product-marketing",
    title: "product marketing",
  },
  {
    path: "/dashboard/paid-marketing",
    title: "paid marketing",
  },
  {
    path: "/dashboard/organic-marketing",
    title: "organic marketing",
  },
  {
    path: "/",
    title: "home",
  },
];

const SideBar = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-green-500">Dashboard</h1>
      <ul className="">
        {navLinks.map((item) => (
          <li className="my-2" key={item.path}>
            <Link className="capitalize " to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
