
import React from 'react'
import{IoPersonCircleOutline} from "react-icons/io5";
import{AiOutlineLike ,AiOutlineDislike} from"react-icons/ai";

export default function Status() {
    return (
        <div>
            <div className=" mx-2 p-2 border border-gray-300 rounded-lg">
          <div className="flex">
          <header className=""> <IoPersonCircleOutline size={40} /> </header>
          <div className="mt-2 px-1">บาสชามะลิ </div>
          </div>
          <div className="px-2 ">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto</div>

          <div className="px-2 mt-1 flex">
              <button>
              <AiOutlineLike size={24} className="mt-1 mr-2" />
              </button>
              <div className="mr-2 mt-2"> 100 </div>
              <button>
              <AiOutlineDislike size={24} className="mt-1 mr-2 ml-3"/>
              </button>
              <div className='mr-2 mt-2'> 200 </div>  
          </div>
      </div>
            
        </div>
    )
}
