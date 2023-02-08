import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
     

  return (
    <>
      <section id="login">
        <div className="flex w-full flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
          <div className="h-screen px-4 pt-4  lg:pt-20 lg:flex lg:w-2/4 lg:items-center lg:justify-center lg:px-0 ">
            <form className="rounded-md border px-6 py-12 shadow-md">
              <p className="w-3/4 pb-10 text-3xl font-bold text-base-300">
                Login Untuk Dapatkan <span className="text-base-200">Fitur Menarik</span>
              </p>
              <div className="relative">
                <input type="text" placeholder="Masukan Email Anda" className="w-full rounded-md border py-2 pl-20 focus:outline-none" />
                <i className="fa-solid fa-envelope absolute left-2 top-1 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="relative mt-4 py-6">
                <input type="password" placeholder="Masukan Password Anda" className="w-full rounded-md border py-2 pl-20 focus:outline-none" />
                <i className="fa-solid fa-lock absolute left-2 top-7 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="flex items-center space-x-2 px-2 text-sm text-slate-800">
                <input type="checkbox" /> <span>Save akun</span>
              </div>

              <button className="my-4 w-full rounded-xl bg-base-500 py-4 text-white">Login</button>
              <p className="pt-4 text-center text-slate-800">
                Belum punya akun ?{" "}
                <Link to={"/register"} className="text-base-300">
                  Daftar
                </Link>{" "}
              </p>
            </form>
          </div>
          <div className="lg:h-screen lg:w-2/4 bg-base-600 lg:flex lg:items-center lg:justify-center pt-24">
            <img src="images/login/login.svg" alt="login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
