import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Image from "next/image"

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            <li className=" mx-6 ">
            <Image src="/aespa3.jpeg" width={70} height = {70} className=" h-24 w-24 rounded-full inline-block "/>
           
            <div className="   mt-4 " >
            <div className="text-l text-white px-3">  เจมน้อยดาวทวิต</div>  <div  className="px-3 text-xs text-gray-300">  @jamesidiotboyz</div> 
            </div>
               </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span className="Zspan">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
