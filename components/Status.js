import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

import { useState } from "react";

export default function Status() {
  const [count, setCount] = useState();
  const [disCount, setDisCount] = useState([0]);

  return (
    <div className="container mx-auto max-w-lg py-2">
      <div className="flex-auto">
        <div className="border-2 rounded-lg py-3 px-5">
          <div className="flex">
            <IoPersonCircleOutline size={40} />
            <div className="mt-2 px-1">บาสชามะลิ </div>
          </div>
          <div className="px-2 py-2">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto
          </div>

          <div className="px-2 mt-1 flex">
            <button onClick={() => setCount(!count)} className="  ">
              <AiOutlineLike size={24} color="#2563eb" className="mt-1 mr-2" />
            </button>
            {count ? <div className="mr-2 mt-2">{count + 0} </div> : [0]}
            <button onClick={() => setDisCount((disCount = 1))}>
              <AiOutlineDislike
                size={24}
                color="#2563eb"
                className="mt-1 mr-2 ml-3"
              />
            </button>
            <div className="mr-2 mt-2"> {disCount} </div>
          </div>
        </div>
      </div>
    </div>
  );
}
