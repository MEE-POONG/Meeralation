import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";

export default function Modalroom() {
  const [showModalStatus, setShowModal] = React.useState(false);
  return (
    <div className="">
      <button
        className=" bg-gray-100 border-2 rounded-xl border-gray-400 mr-4 p-4 m-2"
        placeholder="ตั้งกระตู้"
        onClick={() => setShowModal(true,!showModalStatus)}
      >
        โมดอลสิ
      </button>
      {showModalStatus ? (
        <div className="px-5 flex fixed inset-0  backdrop-filter backdrop-blur-md">
          <div className="w-full max-w-lg  mx-auto my-auto rounded-xl shadow-lg bg-white ">
            <div className="">
              <div
                className=""
                type="button"
                onClick={() => setShowModal(false)}
              >
                <MdOutlineCancel
                  size={24}
                  className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500 "
                />
              </div>
              <div className="mx-auto w-full container p-6">
                <div className="grid grid-cols-2 text-white">
                  <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  ">
                    <div className=" inline-block justify-center"> </div>
                  </button>
                  <button className="box-border h-32 p-4 m-2 rounded-lg bg-gray-600">
                    <div className=" inline-block"> </div>
                  </button>
                </div>
                <button
                  className="w-full mt-4 bg-blue-600 py-2 text-sm shadow-sm  text-white rounded-lg hover:shadow-lg hover:bg-blue-300"
                  type="button"
                >
                  {"Let's go"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
