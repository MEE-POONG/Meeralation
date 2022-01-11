import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPerson, BsMicFill } from "react-icons/bs";
import Modalshereroom from "../components/modalshereroom";

export default function Room() {
  return (
    <div className="mx-auto w-full container p-4 mt-10">
      <div className=" border border-gray-400 rounded-lg p-2">
        <div className="flex justify-between">
          <header className="">
            <div className="mt-2 px-1">I here too </div>
          </header>
          <Modalshereroom/>
        </div>
        <div className="grid grid-cols-3 text-black ">
          <button className=" box-border p-4  m-1 rounded-lg bg-gray-300">
            <BsPerson size={70} />
            <div className=" inline-block"> </div>
            <div className=" ml-14">
              <BsMicFill size={30} />
            </div>
          </button>
          <button className="box-border  p-4 m-1 rounded-lg bg-gray-300">
            <BsPerson size={70} />
            <div className=" inline-block"> </div>
            <div className="ml-14">
              <BsMicFill size={30} />
            </div>
          </button>
          <button className="box-border  p-4 m-1 rounded-lg bg-gray-300">
            <BsPerson size={70} />
            <div className=" inline-block"> </div>
            <div className="ml-14">
              <BsMicFill size={30} />
            </div>
          </button>
        </div>
      </div>
      <button
        className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
        type="button"
      >
        {"Leave"}
      </button>
    </div>
  );
}
