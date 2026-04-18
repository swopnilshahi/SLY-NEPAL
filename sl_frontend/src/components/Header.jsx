import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const baseStyle =
    "text-sm font-medium transition-colors hover:text-primary";

  const navLinkClass = ({ isActive }) =>
    `${baseStyle} ${
      isActive ? "text-primary" : "text-slate-900 dark:text-slate-100"
    }`;

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img className="w-8 h-8" src={logo} alt="logo" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap">
            Solo Laughter Yoga Nepal
          </h2>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          <nav className="flex items-center gap-9">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/success-stories" className={navLinkClass}>
              Success Stories
            </NavLink>

            <NavLink to="/methods" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/conditions" className={navLinkClass}>
              Conditions
            </NavLink>

           

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </nav>

          {/* BOOK BUTTON */}
          <button
            onClick={() => navigate("/book")}
            className="flex items-center justify-center rounded-xl h-10 px-4 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition"
          >
            Book Now
          </button>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-3xl text-slate-900 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6">
          <nav className="flex flex-col gap-4">

            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/success-stories"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Success Stories
            </NavLink>

            <NavLink
              to="/methods"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/conditions"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Conditions
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* BOOK BUTTON */}
            <button
              onClick={() => handleNavigate("/book")}
              className="mt-3 w-full rounded-xl h-10 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition"
            >
              Book Now
            </button>

          </nav>
        </div>
      )}

    </header>
  );
}