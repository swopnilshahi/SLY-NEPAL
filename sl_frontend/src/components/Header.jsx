import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseStyle = "text-sm font-medium transition-colors hover:text-primary";
  const activeStyle = "text-primary";

  const navLinkClass = ({ isActive }) =>
    `${baseStyle} ${
      isActive ? activeStyle : "text-slate-900 dark:text-slate-100"
    }`;

  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-background-light dark:bg-background-dark sticky top-0 z-50">
      
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 text-slate-900 dark:text-slate-100">
          <img className="w-8 h-8" src={logo} alt="Solo Laughter Yoga Nepal" />
          <h2 className="text-lg font-bold whitespace-nowrap">
            Solo Laughter Yoga Nepal
          </h2>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-9">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/methods" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/conditions" className={navLinkClass}>
              Conditions
            </NavLink>


            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <button className="flex items-center justify-center rounded-xl h-10 px-4 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-slate-900 dark:text-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
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
              to="/methods"
              className={navLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              Services
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

            <button className="mt-3 w-full rounded-xl h-10 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition-opacity">
              Book Now
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}