import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav
      className="
        bg-[rgba(255,255,255,0.1)] 
        backdrop-blur-sm 
        border-b border-[#00FFE7] 
        text-[#A0F0ED] 
        px-6 py-3 
        flex items-center justify-between
      "
    >
      {/* Home Logo Link */}
      <Link
        to="/"
        className="text-[#00D1D1] text-xl font-semibold tracking-wide cursor-pointer"
      >
        Liquid<span className="text-[#6C63FF]">UI</span>
      </Link>

      {/* Conditional Login / Logout Button */}
      {token ? (
        <button
          onClick={handleLogout}
          className="
            bg-[#007E7E] 
            hover:bg-[#2D9CDB] 
            text-white 
            px-4 py-2 
            rounded-md 
            transition-colors duration-200
            cursor-pointer
            inline-block
            text-center
          "
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className="
            bg-[#007E7E] 
            hover:bg-[#2D9CDB] 
            text-white 
            px-4 py-2 
            rounded-md 
            transition-colors duration-200
            cursor-pointer
            inline-block
            text-center
          "
        >
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
