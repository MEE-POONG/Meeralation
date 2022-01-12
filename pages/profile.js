import React from "react";
import { CgProfile } from "react-icons/cg";
import Modalstatus from "../components/modalstatus";
import Status from "../components/Status";
import Sidebar from "../components/Sidebar";
import Image from "next/image"

export default function Profile() {
  return (
    <div>
      <Sidebar />
      <div className=" bg-gray-700 text-white w-full h-40 py-2">
        <div className="px-5">
          <div className="container mx-auto max-w-lg py-2 h-full border-2 rounded-lg px-5 ">
            <div className=" flex justify-center mx-auto w-2/5 container mt-4" >
              <Image src="/aespa3.jpeg" width={80} height={80} className="rounded-full  inline-block border-2 border-gray-500" />
            </div>
            <div className="text-center mt-2">บาสน้อยหอยสัง</div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <Modalstatus />
      </div>
      <div className="px-5">
        <Status />
      </div>
    </div>
  );
}
