"use client";
import React from "react";
import "./navbar.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [pro, setpro] = useState(false);
  let mobile_menu = useRef();

  // function for mobile menu bar

  function mobile_menu_bar() {
    document.querySelector("#menu-list").classList.toggle("show_mobilemenu");
    mobile_menu.current.classList.toggle("bi-x-circle-fill");
  }

  // function for home redirect on logo clicking

  function home_redirect() {
    location = "/";
  }

  // function for changing theme

  function change_them() {
    let darkmode = document.querySelector(".bi-moon-stars-fill");
    document.body.style.transition = "all 0.1s linear";
    document.body.classList.toggle("dark_them");
    let them;

    if (document.body.classList.contains("dark_them")) {
      darkmode.classList.add("bi-sun-fill");
      them = "dark";
    } else {
      darkmode.classList.remove("bi-sun-fill");
      them = "light";
    }

    localStorage.setItem("mode", them); // Save the theme to localStorage
  }

  // Apply the saved theme on page load
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("mode");
    if (savedTheme === "dark") {
      document.body.classList.add("dark_them");
      document
        .querySelector(".bi-moon-stars-fill")
        .classList.add("bi-sun-fill");
    }
  }, []);

  // function contact page redirect

  function contact_redirect() {
    location = "/contact";
  }

  // navbar active links

  let navbar_links = document.querySelectorAll("#menu-list .navlinks");
  let windowpath = window.location.pathname;
  navbar_links.forEach((a) => {
    let navbar_links_path = new URL(a.to).pathname;
    if (windowpath === navbar_links_path) {
      a.classList.add("navbar_active");
    }
  });

  // function for the scrolling windows

  window.onscroll = () => {
    document.getElementById("menu-list").classList.remove("show_mobilemenu");
    mobile_menu.current.classList.remove("bi-x-circle-fill");
  };

  return (
    <header>
      <div className="mobile_menu_box" onClick={mobile_menu_bar}>
        <span className="bi-list" ref={mobile_menu}></span>
      </div>

      <nav id="menu-list">
        <div className="logo">
          <img
            src="/text_logo.png"
            alt="Logo"
            id="logo"
            onClick={home_redirect}
          />
        </div>

        <ul>
          <li>
            <Link
              to="/"
              aria-label="Read about our website"
              className="navlinks"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              aria-label="Read about our website"
              className="navlinks"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              aria-label="Read about our website"
              className="navlinks"
            >
              BLOG
            </Link>
          </li>
          <li onClick={() => setpro(!pro)}>
            <Link to="#" className="navlinks">
              Products
              <span className="bi-chevron-down"></span>
            </Link>
          </li>
          {pro ? <i>nigar</i> : ""}
        </ul>

        <div className="links">
          <span className="bi-person-fill" onClick={contact_redirect}></span>
          <span className="bi-moon-stars-fill" onClick={change_them}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
