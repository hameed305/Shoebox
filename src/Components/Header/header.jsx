"use client";
import React, { useRef, useState, useEffect } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const mobileMenuIcon = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle mobile menu
  function handleMobileMenu() {
    document.querySelector("#menu-list").classList.toggle("show_mobilemenu");
    mobileMenuIcon.current.classList.toggle("bi-x-circle-fill");
  }

  // Redirect to home
  function handleHomeRedirect() {
    navigate("/");
  }

  // Redirect to contact
  function handleContactRedirect() {
    navigate("/contact");
  }

  // Toggle dark/light theme
  function handleThemeToggle() {
    const icon = document.querySelector(".bi-moon-stars-fill");
    document.body.style.transition = "all 0.1s linear";
    document.body.classList.toggle("dark_them");

    let theme;
    if (document.body.classList.contains("dark_them")) {
      icon.classList.add("bi-sun-fill");
      theme = "dark";
    } else {
      icon.classList.remove("bi-sun-fill");
      theme = "light";
    }

    localStorage.setItem("mode", theme);
  }

  // Apply saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("mode");
    if (savedTheme === "dark") {
      document.body.classList.add("dark_them");
      document
        .querySelector(".bi-moon-stars-fill")
        ?.classList.add("bi-sun-fill");
    }
  }, []);

  // Remove mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      document.getElementById("menu-list")?.classList.remove("show_mobilemenu");
      mobileMenuIcon.current?.classList.remove("bi-x-circle-fill");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown
  function toggleDropdown() {
    setDropdownOpen((prev) => !prev);
  }

  return (
    <header>
      <div className="mobile_menu_box" onClick={handleMobileMenu}>
        <span className="bi-list" ref={mobileMenuIcon}></span>
      </div>

      <nav id="menu-list">
        <div className="logo">
          <img
            src="/text_logo.png"
            alt="Logo"
            id="logo"
            onClick={handleHomeRedirect}
          />
        </div>

        <ul>
          <li>
            <Link
              to="/"
              className={`navlinks ${
                location.pathname === "/" ? "navbar_active" : ""
              }`}
              aria-label="Home"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`navlinks ${
                location.pathname === "/about" ? "navbar_active" : ""
              }`}
              aria-label="About"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`navlinks ${
                location.pathname === "/blog" ? "navbar_active" : ""
              }`}
              aria-label="Blog"
            >
              BLOG
            </Link>
          </li>
          <li className="dropdown">
            <span
              onClick={toggleDropdown}
              className="dropdown-toggle"
              aria-label="More"
            >
              MORE
            </span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="#"
                    className={`navlinks ${
                      location.pathname === "/services" ? "navbar_active" : ""
                    }`}
                  >
                    Link 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={`navlinks ${
                      location.pathname === "/portfolio" ? "navbar_active" : ""
                    }`}
                  >
                    Link 2
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div className="links">
          <span
            className="bi-person-fill"
            onClick={handleContactRedirect}
          ></span>
          <span
            className="bi-moon-stars-fill"
            onClick={handleThemeToggle}
          ></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
