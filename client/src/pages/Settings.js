import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Sidebar from "../components/section/Sidebar";

const Settings = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const decode = jwtDecode(token);

    const newData = [...data, decode];

    setData(newData);
  };

  useEffect(() => {
    getUsers();
    document.title = "Settings";
  },[]);

  return (
    <section>
      <div className="bg-base-800">
        <div className="px-4 pt-20 lg:flex  lg:h-screen lg:items-center lg:justify-between lg:px-[65px] lg:pt-[150px]">
          <Sidebar />
          <div className="w-full lg:w-[75%]">
            <div>
              <p className="text-3xl font-bold text-slate-800">Settings</p>
              <p className="text-md text-slate-700">
                Silahkan ubah pengaturan sesuai yang diinginkan
              </p>
            </div>
            <div className="flex w-full flex-wrap justify-center space-y-4 px-2 pt-6 lg:justify-between lg:space-y-0 lg:pt-[100px]">
              <div className="w-full rounded-xl bg-white px-6 py-6 shadow-sm lg:w-[30%]">
                <img
                  src="images/settings/course.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800 lg:text-xl">
                  Course Settings
                </p>
                <p className="text-sm text-slate-700">Ubah Pembelajaran</p>
                <Link to={"/setting_course"}>
                  <button className="my-4 w-full rounded-full bg-button-100 py-4 px-4 text-slate-600">
                    Update Course
                  </button>
                </Link>
              </div>
              <div className="w-full rounded-xl bg-white px-6 py-6 shadow-sm lg:w-[30%]">
                <img
                  src="images/profile.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800 lg:text-xl">
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
              <div className="w-full rounded-xl bg-white px-6 py-6 shadow-sm lg:w-[30%]">
                <img
                  src="images/settings/password.svg"
                  alt="profile"
                  className="h-[100px] w-[100px] rounded-full border"
                />
                <p className="py-4 text-2xl font-semibold text-slate-800 lg:text-xl">
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
