import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";
import FormProfile from "../components/FormProfile";

const Profile = () => {
  const token = localStorage.getItem("token");
  const statics = [jwtDecode(token)];
  useEffect(() => {
    document.title = "Setting Profile"
  },[])
  if (!token) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <section>
      <div className="bg-base-800">
        <div className="flex h-screen items-center  justify-between px-[65px] lg:pt-[150px]">
          <div
            id="sidebar"
            className="w-[20%]  rounded-lg bg-white px-4 py-4 shadow-lg shadow-slate-100"
          >
            <div>
              {statics.map((index) => (
                <div key={index}>
                  <img
                    src={
                      index.avatar
                        ? `http://localhost:4000/${index.avatar}`
                        : `http://localhost:4000/uploads/default.png`
                    }
                    alt="profile"
                    className="mb-4 h-[80px] w-[80px] rounded-full"
                  />
                  <p className="text-slate-800">{index.nama}</p>
                </div>
              ))}
              <p className="mt-1 text-sm text-base-300">Life is Journey</p>
              <div className="mt-8 flex-col space-y-6">
                <p className="flex items-center space-x-3">
                  <i className=" fa-solid fa-comments flex w-[30px] justify-center text-xl text-slate-500"></i>
                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Forum {"(Umum)"}
                  </Link>
                </p>
                <p className="flex items-center space-x-3">
                  <i className="fa-solid fa-book flex w-[30px] justify-center text-xl text-slate-500"></i>
                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Kelas saya
                  </Link>
                </p>
                <p className="flex items-center space-x-3">
                  <i className="fa-solid fa-shop flex w-[30px] justify-center text-xl text-slate-500"></i>

                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Voucher
                  </Link>
                </p>
                <p className="flex items-center space-x-3">
                  <i className="fa-solid fa-palette flex w-[30px] justify-center text-xl text-slate-500"></i>

                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Karya saya
                  </Link>
                </p>
                <p className="flex items-center space-x-3">
                  <i className="fa-solid fa-cart-shopping flex w-[30px] justify-center text-xl text-slate-500"></i>

                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Riwayat Transaksi
                  </Link>
                </p>
                <p className="flex items-center space-x-3">
                  <i className="fa-solid fa-gear flex w-[30px] justify-center text-xl text-base-200"></i>

                  <Link to={"/dashboard"} className="text-md text-slate-500">
                    Settings
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[75%]">
            <p className="text-3xl font-semibold text-base-200">
              Setting <span className="text-base-300">Profile</span>
            </p>
            <FormProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
