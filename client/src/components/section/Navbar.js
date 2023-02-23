import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  window.onscroll = function () {
    const header = document.querySelector("#navbar");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <section>
        <div
          className="fixed z-[999999] w-full px-4 py-4 lg:flex lg:items-center lg:justify-between lg:py-2 
        lg:px-[65px] "
          id="navbar"
        >
          <div className="flex justify-between lg:w-2/4">
            <img src="logo.png" alt="logo" className="w-[45%] lg:w-1/4" />
            <div onClick={() => setToggle(!toggle)} className="text-4xl">
              <i
                className={`fa-solid fa-bars  lg:hidden ${
                  !toggle ? "block" : "hidden"
                }`}
              ></i>
              <i
                className={`fa-solid fa-xmark lg:hidden ${
                  toggle ? "block" : "hidden"
                }`}
              ></i>
            </div>
          </div>
          <div className="rounded-xl bg-base-600 px-4 lg:w-2/4 lg:bg-transparent">
            <ul
              className={`lg:py-0" space-y-4 py-10 text-slate-800 lg:flex lg:items-center lg:space-x-10 lg:space-y-0 ${
                toggle ? "block" : "hidden"
              }`}
            >
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="/">Materi</a>
              </li>
              <li>
                <a href="/">Karir</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li
                className={`rounded-full border bg-white px-4 py-4 text-center text-base-100 lg:px-10 lg:py-2 lg:text-left
               ${token ? "hidden" : "block"}`}
              >
                <Link to={"/login"}>Login</Link>
              </li>
              <li
                className={`rounded-full bg-base-200 px-4 py-4 text-center text-slate-50 lg:px-10 lg:py-2 lg:text-left
                ${token ? "hidden" : "block"}`}
              >
                <Link to={"/register"}>Daftar</Link>
              </li>
              <li
                onClick={logout}
                className={`cursor-pointer ${!token ? "hidden" : "block"}`}
              >
                Log out
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
