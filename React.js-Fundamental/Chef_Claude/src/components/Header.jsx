import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow-md shadow-gray-200">
      <div className="max-w-screen-md mx-auto flex items-center justify-center gap-3 py-3">
        <img
          src="/chef-claude1.png"
          alt="Chef Claude logo"
          className="h-14 w-auto select-none"
          draggable="false"
        />
        <span className="text-2xl font-semibold text-gray-800 tracking-wide">
          Chef Claude
        </span>
      </div>
    </nav>
  );
};

export default Header;
