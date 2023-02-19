import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Settings = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const decode = jwtDecode(token);

    setData([decode]);
  };
  console.log(data);

  useEffect(() => {
    getUsers();
    document.title = "Settings";
  }, []);

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
            <div>
              <p className="text-3xl font-bold text-slate-800">Settings</p>
              <p className="text-md text-slate-700">
                Silahkan ubah pengaturan sesuai yang diinginkan
              </p>
            </div>
            <div className="flex w-full justify-between pt-[100px]">
              <div className="w-[30%] rounded-xl bg-white px-6 py-6 shadow-sm">
                <img
                  src="images/settings/course.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800">
                  Course Settings
                </p>
                <p className="text-sm text-slate-700">
                  Mempermudah pembelajaran
                </p>
                <Link to={"/setting_course"}>
                  <button className="my-4 w-full rounded-full bg-button-100 py-4 px-4 text-slate-600">
                    Update Course
                  </button>
                </Link>
              </div>
              <div className="w-[30%] rounded-xl bg-white px-6 py-6 shadow-sm">
                <img
                  src="images/profile.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800">
                  My Profile
                </p>
                <p className="text-sm text-slate-700">Ubah data diri kamu</p>
                {data.map((index) => (
                  <div key={index}>
                    <Link to={`/profile/${index.id}`}>
                      <button className="my-4 w-full rounded-full bg-button-100 py-4 px-4 text-slate-600">
                        Update Profile
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="w-[30%] rounded-xl bg-white px-6 py-6 shadow-sm">
                <img
                  src="images/settings/password.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800">
                  Change Password
                </p>
                <p className="text-sm text-slate-700">Ubah kata sandi kamu</p>

                <Link to={"/password"}>
                  <button className="my-4 w-full rounded-full bg-button-100 py-4 px-4 text-slate-600">
                    Update Password
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
