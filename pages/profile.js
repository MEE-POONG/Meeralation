import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoPersonCircleOutline } from "react-icons/io5";
import Modalstatus from "../component/modalstatus";
import Status from "../component/Status";

export default function Profile() {
  return (
    <div className="mx-auto w-full container">
      <div className=" bg-gray-700 text-white w-full  py-12">
        <div className=" flex justify-center">
          <CgProfile size={80} />{" "}
        </div>
        <div className="text-center mt-5">บาสน้อยหอยสัง</div>
      </div>
      <Modalstatus/>
      <Status />
    </div>
  );
}
