import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";
import Modalstatus from "../components/modalstatus";
import Status from "../components/Status";
import Sidebar from "../components/Sidebar";

export default function Profile() {
  return (
    <div>
      <Sidebar />
      <div className=" bg-gray-700 text-white w-full  py-12">
        <div className=" flex justify-center mx-auto w-2/5 container" >
          <CgProfile size={80} />{" "}
        </div>
        <div className="text-center mt-5">บาสน้อยหอยสัง</div>
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
