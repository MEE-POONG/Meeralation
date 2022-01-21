import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Login from "./loginPage";

const initialState = {
  firstname: "",
  lastname: "",
  date: "",
  username: "",
  password: "",
  img: "",
};

const defaultUserState = [];
export default function Register() {
  const [formUser, setFormUser] = useState(initialState);
  const [userList, setUserList] = useState(defaultUserState);
  const { firstname, lastname, date, username, password } = formUser;
  const [imgFile, setImgFile] = useState();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const { data } = await axios.get("/api/user/");
      setUserList(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handelSubmitFile = async (event) => {
    const file = event.target.files[0];
    setImgFile(file);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationUser();
    if (validationError) return;

    const setDataError = await uploadImage(imgFile);
    if (setDataError) return;

    setFormUser(initialState);

    await Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });

    await getUserData();
  };

  const validationUser = () => {
    if (!firstname || !lastname || !date || !username || !password) {
      return Swal.fire({
        icon: "error",
        title: "กรอกข้อมูลไม่ครบ",
      });
    }
  };

  const uploadImage = async (img) => {
    try {
      let userData;
      userData = { ...formUser };
      if (img) {
        let formData = new FormData();
        formData.append("file", img, img.name);
        const { data } = await axios.post(
          "http://upload-image.gin-a-rai-dee.daddybody.company/upload/",
          formData
        );
        console.log(data?.filename);
        userData.img = data?.filename || formUser?.img;
      }
      setImgFile("");
      console.log(userData);
      const setDataImgError = await setDataUser(userData); //ส่งไปยัง setDataStore
      if (setDataImgError) return;
    } catch (error) {
      return true;
    }
  };

  const showImage = () =>
    !formUser.img
      ? imgFile
        ? URL.createObjectURL(imgFile)
        : "https://i.stack.imgur.com/y9DpT.jpg"
      : "uploads/" + formUser.img;

  const setDataUser = async (userData) => {
    try {
      // console.log(storeData);
      await axios.post("/api/users", userData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เพิ่มข้อมูลไม่สำเร็จ",
      });
      return true;
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-lg py-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Mee Relation
        </h2>
        <div className="px-4 flex-auto">
          <div className="py-10  grid">
            <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white">
              <div className="max-w-md w-full space-y-8 py-5">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">
                  REGISTER
                </h2>
                <form className="w-full max-w-lg" onSubmit={handelSubmit}>
                  <div className="flex items-center justify-center">
                    <label className="rounded-lg group text-center">
                      <img
                        className="rounded-full w-32 h-32 border-8 shadow-xl"
                        src={showImage()}
                      />
                      <input
                        type="file"
                        className="hidden"
                        onChange={handelSubmitFile}
                        id="img"
                        name="img"
                      />
                    </label>
                  </div>
                  <input
                    onChange={(e) =>
                      setFormUser({ ...formUser, firstname: e.target.value })
                    }
                    value={firstname}
                    className="mt-5 appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Firstname"
                  />
                  <input
                    onChange={(e) =>
                      setFormUser({ ...formUser, lastname: e.target.value })
                    }
                    value={lastname}
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Lastname"
                  />
                  <input
                    onChange={(e) =>
                      setFormUser({ ...formUser, date: e.target.value })
                    }
                    value={date}
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    type="date"
                    name="date"
                  />

                  <input
                    onChange={(e) =>
                      setFormUser({ ...formUser, username: e.target.value })
                    }
                    value={username}
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Username"
                  />
                  <input
                    onChange={(e) =>
                      setFormUser({ ...formUser, password: e.target.value })
                    }
                    value={password}
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Password"
                  />

                  <div className="py-5">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Login/>
      </div>
    </>
  );
}
