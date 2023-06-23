import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon, Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const routes = [
    { id: 1, name: "Books", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Blog", path: "/blog" },
  ];
  return (
    <>
      <nav className="  bg-gray-100 shadow-lg py-2 header">
        <div className="md:hidden p-2">
          {isNavMenuOpen === true ? (
            <Bars4Icon
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="h-6 w-6 text-blue-500"
            />
          ) : (
            <XMarkIcon
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="h-6 w-6 text-blue-500"
            />
          )}
        </div>
        <ul className="inline-flex items-center justify-between w-full px-16">
          <NavLink to="/">
            <BoltIcon
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="h-6 w-6 text-blue-500"
            />
            <h2>ItBookStore</h2>
          </NavLink>

          <span
            className={`grid md:flex md:justify-between p-2 w-full lg:px-16 py-2 md:py-2 absolute md:static duration-1000 bg-gray-100 lg:bg-gray-100  ${
              isNavMenuOpen ? "top-10" : "-top-40"
            }`}
          >
            {routes.map((route) => (
              <NavLink
                className={`font-bold text-2xl`}
                to={route.path}
                key={route.id}
              >
                {route.name}
              </NavLink>
            ))}
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Header;

{
  /* <div className="lg:hidden">
  {isNavMenuOpen === true ? (
    <Bars4Icon
      onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      className="h-6 w-6 text-blue-500"
    />
  ) : (
    <XMarkIcon
      onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
      className="h-6 w-6 text-blue-500"
    />
  )}
</div>; */
}
