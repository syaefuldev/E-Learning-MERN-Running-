import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const decode = jwtDecode(token);

    setData([decode]);
  };
  console.log(data);

  useEffect(() => {
    getUsers();
  }, []);

  if (!token) {
    return <Navigate to={"/"} replace={true} />;
  }
  return (
    <section id="dashboard">
      <div className="flex h-screen items-center justify-between px-[65px] lg:pt-[150px]">
        <div
          id="sidebar"
          className="w-[20%]  rounded-lg bg-base-600 px-4 py-4 shadow-md shadow-slate-100"
        >
          {data.map((index) => (
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
          ))}
        </div>
        <div className="w-[75%]">
         
        </div>
      </div>
    </section>
  );
};

export default Profile;
