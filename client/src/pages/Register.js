import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    nama: "",
    username: "",
    email: "",
    password: "",
  });

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/cms/users/", form);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section id="register">
        <div className="flex w-full flex-col-reverse lg:flex-row-reverse lg:items-center lg:justify-between">
          <div className="h-screen px-4 pt-4  lg:flex lg:w-2/4 lg:items-center lg:justify-center lg:px-0 lg:pt-32 ">
            <form method="post" onSubmit={signUp} className="rounded-md border px-6 py-10 shadow-md">
              <p className="w-3/4 pb-10 text-3xl font-bold text-base-300">
                Daftar dan Dapatkan <span className="text-base-200">Fitur Menarik</span>
              </p>
              <div className="relative mb-6">
                <input type="text" placeholder="Masukan Nama Lengkap" className="w-full rounded-md border py-2 pl-20 focus:outline-none" value={form.nama} name="nama" onChange={handleChange} />
                <i className="fa-solid fa-user absolute left-2 top-1 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="relative mb-6">
                <input type="text" placeholder="Masukan Username Anda" className="w-full rounded-md border py-2 pl-20 focus:outline-none" value={form.username} name="username" onChange={handleChange} />
                <i className="fa-solid fa-user absolute left-2 top-1 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="relative">
                <input type="email" placeholder="Masukan Email Anda" className="w-full rounded-md border py-2 pl-20 focus:outline-none" value={form.email} name="email" onChange={handleChange} />
                <i className="fa-solid fa-envelope absolute left-2 top-1 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="relative py-6">
                <input type="password" placeholder="Masukan Password Anda" className="w-full rounded-md border py-2 pl-20 focus:outline-none" value={form.password} name="password" onChange={handleChange} />
                <i className="fa-solid fa-lock absolute left-2 top-7 border-r-2 px-4 text-2xl text-base-400"></i>
              </div>
              <div className="flex items-center space-x-2 px-2 text-sm text-slate-800">
                <input type="checkbox" /> <span>Save akun</span>
              </div>

              <button className="my-4 w-full rounded-xl bg-base-500 py-4 text-white">Daftar</button>
              <p className="pt-4 text-center text-slate-800">
                Sudah punya akun ?{" "}
                <Link to={"/login"} className="text-base-300">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
          <div className="bg-base-600 pt-24 lg:flex lg:h-screen lg:w-2/4 lg:items-center lg:justify-center">
            <img src="images/login/login.svg" alt="login" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
