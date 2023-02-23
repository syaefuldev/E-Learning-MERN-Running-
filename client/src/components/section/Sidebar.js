import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const Sidebar = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const decode = jwtDecode(token);

    setData([decode]);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div
      id="sidebar"
      className="w-full flex-col rounded-lg px-4 py-4 shadow-lg shadow-slate-100 lg:static lg:w-[20%] lg:flex-row lg:bg-white"
    >
      {data.map((index) => (
        <div key={index} className="flex justify-center lg:block">
          <img
            src={
              index.avatar
                ? `http://localhost:4000/${index.avatar}`
                : `http://localhost:4000/uploads/default.png`
            }
            alt="profile"
            className="mb-4 hidden h-[80px] w-[80px] rounded-full lg:block"
          />
          <p className="hidden text-slate-800 lg:block">{index.nama}</p>
          <p className="mt-1 hidden text-sm text-base-300 lg:block">
            Life is Journey
          </p>
          <div className="fixed bottom-0 mb-4 flex items-center space-x-4 rounded-full bg-white px-10 py-4 lg:static lg:flex-col lg:items-start lg:space-y-6 lg:space-x-0 lg:rounded-none lg:bg-none lg:px-0 lg:pt-8">
            <Link
              to={"/dashboard"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className=" fa-solid fa-comments flex w-[30px] justify-center text-xl "></i>{" "}
              <span className="hidden lg:block">Forum {"(Umum)"}</span>
            </Link>
            <Link
              to={"/dashboard"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className="fa-solid fa-book flex w-[30px] justify-center text-xl text-slate-500"></i>
              <span className="hidden lg:block">Kelas saya</span>
            </Link>

            <Link
              to={"/dashboard"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className="fa-solid fa-shop flex w-[30px] justify-center text-xl text-slate-500"></i>{" "}
              <span className="hidden lg:block">Voucher</span>
            </Link>

            <Link
              to={"/dashboard"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className="fa-solid fa-palette flex w-[30px] justify-center text-xl text-slate-500"></i>
              <span className="hidden lg:block">Karya saya</span>
            </Link>

            <Link
              to={"/dashboard"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className="fa-solid fa-cart-shopping flex w-[30px] justify-center text-xl text-slate-500"></i>{" "}
              <span className="hidden lg:block">Riwayat Transaksi</span>
            </Link>

            <Link
              to={"/settings"}
              className="text-md flex items-center space-x-3 text-slate-500"
            >
              <i className="fa-solid fa-gear flex w-[30px] justify-center text-xl  text-base-200"></i>{" "}
              <span className="hidden lg:block">Settings</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
