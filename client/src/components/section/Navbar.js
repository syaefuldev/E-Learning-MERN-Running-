import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <section id="navbar">
        <div
          className="fixed z-[999999] w-full px-4 py-4 lg:py-2 lg:flex lg:items-center lg:justify-between 
        lg:px-[65px] "
        >
          <div className="flex justify-between lg:w-2/4">
            <img src="logo.png" alt="logo" className="w-[45%] lg:w-1/4" />
            <div onClick={() => setToggle(!toggle)} className="text-4xl">
              <i class={`fa-solid fa-bars  lg:hidden ${!toggle ? "block" : "hidden"}`}></i>
              <i class={`fa-solid fa-xmark lg:hidden ${toggle ? "block" : "hidden"}`}></i>
            </div>
          </div>
          <div className="rounded-xl bg-base-600 px-4 lg:w-2/4 lg:bg-transparent">
            <ul className={`lg:py-0" space-y-4 py-10 text-slate-800 lg:flex lg:items-center lg:space-x-10 lg:space-y-0 ${toggle ? "block" : "hidden"}`}>
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
                className="rounded-full border bg-white px-4 py-4 text-center text-base-100 lg:px-10 lg:py-2 lg:text-left
              "
              >
                <Link to={"/login"}>Login</Link>
              </li>
              <li
                className="rounded-full bg-base-200 px-4 py-4 text-center text-slate-50 lg:px-10 lg:py-2 lg:text-left
              "
              >
                <Link to={"/register"}>Daftar</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
