import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Sidebar from "../components/section/Sidebar";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const getUsers = async () => {
    const decode = jwtDecode(token);

    setData([decode]);
  };

  useEffect(() => {
    getUsers();
    document.title = "Dashboard | Forum";
  }, []);

  return (
    <>
      <section id="dashboard">
        <div className="bg-base-800">
          <div className="lg:flex h-screen items-center justify-between px-4 lg:px-[65px] lg:pt-[150px]">
            <Sidebar />
            <div className="lg:w-[75%] relative">
              <p className="pb-4 text-2xl font-semibold text-base-200">
                Yuk Obrolin Sesuatu di{" "}
                <span className="text-base-300">Forum Ini</span>
              </p>
              <div
                id="boardchat"
                className="relative h-[450px] border bg-white"
              >
                <div
                  id="title"
                  className="flex w-full items-center justify-between bg-base-600 py-4"
                >
                  <i className="fa-solid fa-arrow-left pl-[65px]"></i>
                  <div className="text-2xl font-bold text-base-300">
                    Forum Global
                  </div>
                  <i className="fa-solid fa-magnifying-glass pr-[65px]"></i>
                </div>
                <div className="absolute bottom-32 w-full px-4">
                  {data.map((index) => (
                    <div className="flex items-center space-x-4" key={index}>
                      <img
                        src={
                          index.avatar
                            ? `http://localhost:4000/${index.avatar}`
                            : `http://localhost:4000/uploads/default.png`
                        }
                        alt="profile"
                        className="h-[40px] w-[40px] rounded-full"
                      />
                      <p className="rounded-full bg-base-700 py-2 px-4 text-slate-800">
                        Hallo, ini adalah forum
                      </p>
                      <p className="text-sm text-slate-500">20.08 AM</p>
                    </div>
                  ))}
                  <input
                    type="text"
                    className="absolute bottom-[-100px] w-[90%] rounded-3xl  border-2 border-base-500  py-4 px-10 outline-none"
                    placeholder="Kirim sebuah pesan"
                  />
                  <div
                    className="absolute bottom-[-93px] right-[30px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-base-500 text-slate-800
                "
                  >
                    <i className="fa-solid fa-paper-plane text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
