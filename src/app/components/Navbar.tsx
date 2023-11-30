import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 p-4 ${isScrolled ? 'border-b border-gray-700 opacity-80 fixed top-0 right-0 left-0' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="w-8 h-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">Mih& Film 18</span>
        </div>

        <ul className="flex gap-x-10 text-white items-center">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Series</a>
          </li>
          <li className="flex mt-2">
            My List
            <div className="relative">
              <button
                className="text-white focus:outline-none"
                onClick={handleDropdownToggle}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute left-0 mt-0 w-48 border rounded-md shadow-md">
                  <ul className="py-2">
                    <li className="hover:bg-gray-200 px-4 py-2">Option 1</li>
                    <li className="hover:bg-gray-200 px-4 py-2">Option 2</li>
                    <li className="hover:bg-gray-200 px-4 py-2">Option 3</li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white px-3 py-1 rounded-md mr-4"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
