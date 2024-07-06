import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Option, setOption] = useState('POSITION');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center space-x-2 justify-end mr-2 mt-4 md:mt-8 z-20">
      <span className="text-gray-700 text-sm md:text-base">SORT BY:</span>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md border border-purple-500 px-2 py-1 md:px-4 md:py-2 text-sm md:text-base font-medium text-purple-700 bg-white hover:bg-purple-50 focus:outline-none"
            onClick={toggleDropdown}
          >
            <span>{Option}</span>
            <svg
              className="ml-2 -mr-1 h-4 w-4 md:h-5 md:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-40 md:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
                onClick={() => handleOptionClick('Position')}
              >
                Position
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={() => handleOptionClick('Product Name')}
              >
                Product Name
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
                onClick={() => handleOptionClick('Price: Low-High')}
              >
                Price: Low-High
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm md:text-base hover:bg-gray-100"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-3"
                onClick={() => handleOptionClick('Color')}
              >
                Color
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
