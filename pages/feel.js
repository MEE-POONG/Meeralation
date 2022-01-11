import React from "react";
import { AiOutlinePlus, AiOutlinePicture } from "react-icons/ai";
import Status from "../components/Status";

export default function Feel() {
  return (
    <div className="mx-auto w-full container">
      <div className="grid grid-cols-4  text-white ">
        <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  ">
          <div className=" inline-block">
            {" "}
            <AiOutlinePlus size={30} />
          </div>
        </button>
        <button className="box-border h-32 p-4 m-2 rounded-lg bg-gray-600">
          <div className=" inline-block">
            {" "}
            <AiOutlinePicture size={30} />
            Rick White
          </div>
        </button>
        <button className="box-border h-32  p-4 m-2 rounded-lg bg-gray-600">
          <div className=" inline-block">
            {" "}
            <AiOutlinePicture size={30} />
            Rick White
          </div>
        </button>
        <button className="box-border h-32  p-4 m-2 rounded-lg bg-gray-600">
          <div className=" inline-block">
            {" "}
            <AiOutlinePicture size={30} />
            Rick White
          </div>
        </button>
      </div>
      <Status />
    </div>
  );
}
