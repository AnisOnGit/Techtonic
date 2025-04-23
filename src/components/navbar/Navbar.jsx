import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location2 = useLocation();
  const { pathname } = location2;
  const navigate = useNavigate();

  const goToCartTab = () => {
    navigate("/dashboard");
  };

  const goToWishListTab = () => {
    navigate("/dashboard");
  };

  return (
    <div
      className={`navbar  shadow-sm ${
        pathname === "/"
          ? "bg-white text-black"
          : "bg-[rgba(17,17,17,255)] text-white"
      }`}
    >
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                to="/"
                className={`${
                  pathname === "/" ? " border-b-2 border-b-gray-500" : ""
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className={`${
                  pathname === "/dashboard"
                    ? " border-b-2 border-b-gray-500"
                    : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          {" "}
          Techtonic{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>

                
            <Link to="/" className={`${
                  pathname === "/"
                    ? " border-b-2 border-b-gray-500"
                    : ""
                }`}>Home</Link>
          </li>

          <li>
            <Link to="/dashboard" className={`${
                  pathname === "/dashboard"
                    ? " border-b-2 border-b-gray-500"
                    : ""
                }`}>Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <ShoppingCart
          onClick={goToCartTab}
          className={`hover:cursor-pointer  w-8 h-7 p-1 rounded-xl ${
            pathname === "/"
              ? "hover:bg-black hover:text-white text-black"
              : "hover:bg-white hover:text-black text-white"
          }`}
        />

        <Heart
          onClick={goToWishListTab}
          className={`hover:cursor-pointer  w-8 h-7 p-1 rounded-xl ${
            pathname === "/"
              ? "hover:bg-black hover:text-white text-black"
              : "hover:bg-white hover:text-black text-white"
          }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
