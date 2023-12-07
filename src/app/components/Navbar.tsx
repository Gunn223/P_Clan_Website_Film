import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import logo from '../asset/logowebclan-removebg-preview.png';
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Lakukan permintaan pencarian ke API
      const response = await fetch(
        `https://api.themoviedb.org/3/search/keyword?page=1&query=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      );
      const data = await response.json();

      // Simpan hasil pencarian dalam state
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleChange = (e: any) => {
    // Update nilai input pengguna
    setSearchTerm(e.target.value);

    // Panggil fungsi pencarian setelah beberapa detik atau sesuai kebutuhan
    // Ini untuk menghindari permintaan pencarian berlebihan pada setiap perubahan input
    setTimeout(() => {
      handleSearch();
    }, 300);
  };

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
    <div className="relative ">
      <nav
        className={`bg-gray-800 p-4 ${
          isScrolled
            ? 'border-b border-gray-700 opacity-80 fixed z-10 top-0 right-0 left-0'
            : 'fixed z-10 top-0 right-0 left-0'
        }`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            {/* <Image
              src={logo}
              alt="neko"
              className=" mr-2"
              width={39}
              height={39}
            /> */}
            <span className="text-white text-lg font-semibold">Om Mih& Film </span>
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
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        {searchTerm && (
          <ul className="absolute top-30 border right-6 w-80  overflow-y-auto h-96 bg-gray-800 ">
            {searchResults.length === 0 ? (
              <li className="text-white m-auto h-full  flex justify-center items-center">
                Hasil Pencarian Tidak Ditemukan?
              </li>
            ) : (
              searchResults.map((result: any) => (
                <a
                  href="#"
                  key={result.id}>
                  <li className="text-white p-3  hover:text-black hover:bg-blue-50 font-semibold">{result.name}</li>
                </a>
              ))
            )}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
