import React, { useState } from "react";
import CraneLogo from '../Img/Cranelogo.png';
import UsersLogo from '../Img/users.png';
import SearchLogo from '../Img/search.png';
import CartsLogo from '../Img/carts.png';
import { FiMenu } from 'react-icons/fi'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (showSearchInput) {
      setShowSearchInput(false);
    }
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
    if (!menuOpen) {
      setMenuOpen(true);
    }
  };

  return (
    <div className="py-4 px-6 text-blue-700">
      <div className="flex max-md:justify-between items-center ">
        <div className="flex  items-center justify-between">
          <div className="lg:hidden">
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
            >
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
          

        </div>

        <div className="w-full flex max-md:justify-center items-center">
            <img src={CraneLogo} alt="logo" className="w-20"  />
          </div>

        <div className="hidden lg:flex items-center space-x-4">
          <img src={UsersLogo} alt="Users" className="w-8" />
          <img
            src={SearchLogo}
            alt="Search"
            className="w-8 cursor-pointer"
            onClick={toggleSearchInput}
          />
          {showSearchInput && (
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-2"
            />
          )}
          <img src={CartsLogo} alt="Cart" className="w-8" />
        </div>

        <div className="flex lg:hidden items-center ">
          <img src={CartsLogo} alt="Cart" className="w-8" />
        </div>
      </div>

      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} mt-3`}>
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-2 mb-2"
        />
        <nav>
          <a href="#STATIONARY" className="block px-3 py-2 rounded hover:underline">STATIONARY 123</a>
          <a href="#WEDDING" className="block px-3 py-2 rounded hover:underline">WEDDING</a>
          <a href="#BUSINESS" className="block px-3 py-2 rounded hover:underline">BUSINESS</a>
          <a href="#HOLIDAY" className="block px-3 py-2 rounded hover:underline">HOLIDAY</a>
          <a href="#EVENTS" className="block px-3 py-2 rounded hover:underline">EVENTS</a>
          <a href="#SYMPATHY" className="block px-3 py-2 rounded hover:underline">SYMPATHY</a>
          <a href="#SALE" className="block px-3 py-2 rounded hover:underline">SALE</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
