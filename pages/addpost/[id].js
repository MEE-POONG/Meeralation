import React, { useState } from "react";
import { AiOutlinePlus, AiOutlinePicture } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";

// const defaultFormMenu = { name: "", price: "", img: "", storeId: "" };
export default function Addpost() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div className="container mx-auto max-w-lg mt-2">
        <div className="flex  border-2 rounded-lg">
            <IoPersonCircleOutline size={50} />
          <input
            className=" bg-gray-100 border-2 rounded-lg border-gray-200 w-full p-2 m-1 h-10"
            placeholder="ตั้งกระตู้"
            onClick={() => setShowModal(true)}
          />
        </div>

        {showAddpost ? (
          <div className=" px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
            <div className="w-full  max-w-lg  relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
              <div className="">
                <div
                  className=""
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <MdOutlineCancel
                    size={24}
                    className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500 m-2"
                  />
                </div>

                <div className="text-center p-5 flex-auto justify-center">
                  <h2 className="text-2xl font-bold  "></h2>
                  <div className="flex m-2">
                    <header className="">
                      {" "}
                      <IoPersonCircleOutline size={40} />{" "}
                    </header>
                    <div className="mt-2 px-1">บาสชามะลิ </div>
                  </div>
                  <textarea className=" border-2 border-gray-400 rounded-lg w-full p-2" />
                  {/* <Profile/> */}
                  <button
                    className="w-full mt-4 bg-blue-600 py-2 text-sm shadow-sm  text-white rounded-lg hover:shadow-lg hover:bg-blue-300"
                    type="button"
                  >
                    {"โพสต์"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}{" "}
      </div>

  );
}
