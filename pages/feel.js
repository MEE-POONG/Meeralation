import React from "react";

import Status from "../components/Status";
import Sidebar from "../components/Sidebar";
import Modalup from "../components/modalup";

export default function Feel() {
  return (
    <><Sidebar />
     
      <div className="mx-auto w-full container mt-5">
        <Modalup />
        <div className="px-5">
          <Status />
        </div>
      </div></>
  );
}
