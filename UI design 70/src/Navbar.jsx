import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/about", label: "USD Bloom" },
    { to: "/business", label: "Business" },
    { to: "/treasury", label: "Treasury" },
    { to: "/developers", label: "Developers" },
    { to: "/contacts", label: "Join Us" },
  ];

  return (
    <nav className="flex items-center justify-between px-16 py-5 bg-white sticky top-0 z-50">
      <Link
        to="/"
        className="text-xl font-semibold text-[#202020] no-underline"
      >
        <i className="ri-add-line"></i> BloomFi
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-5">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`no-underline text-[#202020] text-lg transition-all duration-300
  ${
    pathname === to
      ? "border border-[#202020] rounded-full px-3 py-1 opacity-100"
      : "border border-transparent rounded-full px-3 py-1 opacity-90"
  }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-[#202020] text-white rounded-full px-6 py-2 text-lg cursor-pointer transition-opacity duration-200 hover:opacity-85">
        Launch BETA <i className="ri-arrow-right-up-line"></i>
      </button>
    </nav>
  );
};

export default Navbar;
