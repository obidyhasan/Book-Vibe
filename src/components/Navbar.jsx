import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const NavbarLink = (
    <div className="flex lg:flex-row flex-col lg:gap-5 gap-2 lg:items-center font-medium text-gray-500">
      <NavLink className="navbar-link py-1 px-3 rounded" to={"/"}>
        Home
      </NavLink>

      <NavLink className="navbar-link py-1 px-3 rounded" to={"/listBooks"}>
        Listed Books
      </NavLink>

      <NavLink className="navbar-link py-1 px-3 rounded" to={"/pagesToRead"}>
        Pages to Read
      </NavLink>
    </div>
  );

  return (
    <div>
      <div className="navbar px-0 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded z-[1] mt-3 w-52 p-2 shadow "
            >
              {NavbarLink}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{NavbarLink}</ul>
        </div>
        <div className="navbar-end flex gap-3 ">
          <a className="btn bg-primary-color text-white rounded-md hover:bg-black">
            Sign In
          </a>
          <a className="btn bg-secondary-color text-white rounded-md hover:bg-black">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
