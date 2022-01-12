import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import Image from "next/image"
import { useRouter } from "next/router";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const router = useRouter();
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <a href="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </a>
        </div>
        <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <a href="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            <li className=" mx-6 ">
              <div className="flex space-x-2">
                <Image src="/aespa3.jpeg" width={30} height={30} className=" rounded-full inline-block " />
                <button className="text-xl text-white px-2"
                  onClick={() => {
                    router.push('/profile');
                  }}>  เจมน้อยดาวทวิต
                </button>
              </div>
            </li>
            <div className="h-0.5 bg-gray-500 mt-5 ml-3 mr-3"> </div>
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
