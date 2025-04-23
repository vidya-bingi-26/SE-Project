import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ONDCLogo from "../../assets/brands/ONDC Logo.png";


const Menu = [
  { id: 1, name: "All", link: "/products" },
  { id: 2, name: "Top Rated", link: "/#services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const getInitials = (name) => {
  if (!name) return "";
  const nameParts = name.trim().split(" ");
  return nameParts
    .map((n) => n[0].toUpperCase())
    .join("")
    .slice(0, 2);
};

const CartButton = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <button
      onClick={() => navigate("/cart")}
      className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 relative"
    >
      <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {cart.length}
        </span>
      )}
    </button>
  );
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem("userInfo"); // Clear user data from local storage
    navigate("/"); // Redirect to login page after logging out
  };

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 sticky top-0">
      {/* Upper Navbar */}
      <div className="bg-white py-2 shadow-slate-500">
        <div className="container flex justify-between items-center">
          <div>
            {/* Navigate Logo to Landing Page */}
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-auto h-10 " />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Cart Button */}
            <CartButton />

            {/* Avatar Section */}
            {user ? (
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm cursor-pointer"
                  onClick={toggleDropdown}
                >
                  {getInitials(user.name)}
                </div>
                {dropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10"
                  >
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-red-600 hover:bg-gray-100 text-left"
                    >
                      🚪 Logout
                    </button>
                    <button
                      onClick={() => navigate("/profile")}
                      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                    >
                      👤 My Profile
                    </button>
                    <button
                      onClick={() => navigate("/orders")}
                      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                    >
                      🧾 My Orders
                    </button>
                    <button
                      onClick={() => navigate("/wishlist")}
                      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                    >
                      ❤️ Wishlist
                    </button>
                    <button
                      onClick={() => navigate("/settings")}
                      className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 text-left"
                    >
                      ⚙️ Settings
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/authentication" className="h-full w-auto">
                <RxAvatar size={35} />
              </Link>
            )}

            <img src={ONDCLogo} className="h-10 w-auto" />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center bg-slate-100">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4">
                {data.name}
              </Link>
            </li>
          ))}
          {/* Simple Dropdown */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
