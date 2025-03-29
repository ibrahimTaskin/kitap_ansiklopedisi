import React from "react";
import { Link } from "react-router-dom";

const theme = () => {
  document.documentElement.classList.toggle("dark");
};

const ToggleButton = () => (
  <div className="ml-3">
    <button
      title="Toggle Theme"
      onClick={theme}
      className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-yellow-600 
        focus:border-transparent
      "
    >
      <div id="toggle" className="rounded-full w-4 h-4 bg-blue-600 dark:focus:ring-yellow-600  relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"></div>
    </button>
  </div>
);

const Navbar = () => (
  <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <Link to="/" className="flex items-center">
        <img
          src={"/img/KitapLogo.png"}
          className="h-6 mr-3 sm:h-9"
          alt="kitap_logo"
        />
      </Link>
      <div className="flex items-center md:order-2">
        <a
          href="https://ibrahimtaskin.cf/"
          target="_blank"
          rel="noreferrer"
          className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <img
            className="w-8 h-8 rounded-full"
            src={"/img/profil_s.jpg"}
            alt="ibrahim_taskin"
          />
        </a>
        <ToggleButton />
      </div>
    </div>
  </nav>
);

export default Navbar;