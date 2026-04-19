import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  // Detect scroll (shrink header)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const baseStyle =
    "relative text-sm lg:text-base font-medium transition-colors";

  const navLinkClass = ({ isActive }) =>
    `${baseStyle} ${
      isActive ? "text-primary" : "text-slate-900 dark:text-slate-100"
    }`;

  const underline = ({ isActive }) =>
    `absolute left-0 -bottom-1 h-[2px] bg-primary transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* BACKDROP */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
      )}

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 shadow-md bg-white/80 dark:bg-slate-900/80 backdrop-blur"
            : "py-3 md:py-4 bg-background-light dark:bg-background-dark"
        } border-b border-slate-200 dark:border-slate-800`}
      >
        <div
          ref={menuRef}
          className="flex items-center justify-between px-4 sm:px-6 md:px-10"
        >
          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3 max-w-[70%]">
            <img className="w-7 h-7 sm:w-8 sm:h-8" src={logo} alt="logo" />
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white truncate">
              Solo Laughter Yoga Nepal
            </h2>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-6 lg:gap-8">
              {[
                { to: "/", label: "Home" },
                { to: "/success-stories", label: "Success Stories" },
                { to: "/methods", label: "Services" },
                { to: "/conditions", label: "Conditions" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <NavLink key={link.to} to={link.to} className="group">
                  {(props) => (
                    <span className={navLinkClass(props)}>
                      {link.label}
                      <span className={underline(props)}></span>
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <button
              onClick={() => navigate("/book")}
              className="rounded-xl h-9 lg:h-10 px-3 lg:px-4 bg-primary text-slate-900 text-xs lg:text-sm font-bold hover:opacity-90 transition"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-2xl sm:text-3xl text-slate-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-6">
            <nav className="flex flex-col gap-4">
              {[
                { to: "/", label: "Home" },
                { to: "/success-stories", label: "Success Stories" },
                { to: "/methods", label: "Services" },
                { to: "/conditions", label: "Conditions" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                onClick={() => handleNavigate("/book")}
                className="mt-3 w-full rounded-xl h-10 bg-primary text-slate-900 text-sm font-bold hover:opacity-90 transition"
              >
                Book Now
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}