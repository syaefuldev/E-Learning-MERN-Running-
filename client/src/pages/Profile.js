import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import FormProfile from "../components/section/FormProfile";
import Sidebar from "../components/section/Sidebar";

const Profile = () => {
  const token = localStorage.getItem("token");
  const statics = [jwtDecode(token)];
  useEffect(() => {
    document.title = "Setting Profile";
  }, []);

  return (
    <section>
      <div className="bg-base-800">
        <div className="flex h-[1040px] items-center  justify-between px-[65px] lg:pt-[150px]">
          <Sidebar />
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
