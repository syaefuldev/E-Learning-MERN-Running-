import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

const FormProfile = () => {
  const token = localStorage.getItem("token");
  const statics = [jwtDecode(token)];
  const [editData, setEditData] = useState({
    nama: "",
    email: "",
    username: "",
    bio: "",
    avatar: "",
  });
  const { id } = useParams();

  const getUsersById = async () => {
    const res = await axios.get(`http://localhost:4000/cms/users/${id}`);
    const result = res.data.data;
    setEditData({
      ...editData,
      nama: result.nama,
      email: result.email,
      username: result.username,
      bio: result?.bio,
      avatar: result.avatar,
    });
  };
  const putData = async () => {
    try {
      const res = await axios.put(
        `http://localhost:4000/cms/users/${id}`,
        {
          ...editData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const result = res.data.data.token;
      console.log(res.data.data.token);
      localStorage.setItem("token", result);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  console.log({ ...editData });

  useEffect(() => {
    getUsersById();
    document.title = "Settings";
  }, []);

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
    if (e.target.files) {
      setEditData({ ...editData, [e.target.name]: e.target.files[0] });
    }
  };
  return (
    <>
      <form
        className=" mt-10 w-[50%] rounded-2xl border bg-white py-6 px-6 shadow-md"
        onSubmit={putData}
        encType="multipart/form-data"
      >
        <div className="flex flex-col">
          <p className="text-slate-600">My avatar</p>
          {statics.map((index) => (
            <img
              src={
                index.avatar
                  ? `http://localhost:4000/${index.avatar}`
                  : `http://localhost:4000/uploads/default.png`
              }
              alt="profile"
              className="h-[100px] w-[100px] rounded-full"
              key={index}
            />
          ))}
          <input
            type="file"
            name="avatar"
            className="my-4"
            onChange={handleChange}
          />
          <label htmlFor="nama" className="py-4 text-slate-600">
            Nama
          </label>
          <input
            type="text"
            name="nama"
            className="rounded-full border bg-gray-200 py-2 px-4 outline-none"
            value={editData.nama}
            onChange={handleChange}
          />
          <label htmlFor="email" className="py-4 text-slate-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="cursor-not-allowed rounded-full border bg-gray-200 py-2 px-4 outline-none"
            value={editData.email}
            disabled={true}
          />
          <label htmlFor="username" className="py-4 text-slate-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="rounded-full border bg-gray-200 py-2 px-4 outline-none"
            value={editData.username}
            onChange={handleChange}
          />
          <label htmlFor="bio" className="py-4 text-slate-600">
            Bio
          </label>
          <input
            type="text"
            name="bio"
            className="rounded-full border bg-gray-200 py-2 px-4 outline-none"
            value={editData.bio ? editData.bio : ""}
            onChange={handleChange}
          />
          <button type="submit">Ubah Profile</button>
        </div>
      </form>
    </>
  );
};

export default FormProfile;
