import React, { useState } from "react";
import { AiOutlinePlus, AiOutlinePicture } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";


export default function Modalup() {
    const [displayModal, setDisplayModal] = useState(false);
    const [keyroomModal, setKeyroomModal] = useState(false);
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                    <div className="flex">
                        <ul className="flex items-center justify-center space-x-2">
                            <li className="flex flex-col items-center space-y-2"
                                onClick={() => setDisplayModal(true)}
                            >
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>

                                    <button className="absolute transition duration-500 bg-white border-gray-400 
                                    h-8 w-8 rounded-full text-white border-2 
                                    border-white flex justify-center items-center opacity-80
                                    hover:opacity-60">
                                    </button>

                                    <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                                </div>
                                <span className="story-text font-medium">
                                    Create
                                </span>
                            </li>
                            <li className="flex flex-col items-center space-y-2"
                                onClick={() => setKeyroomModal(true)}
                            >
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638687110777-b3fcdf2f9c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>

                                    <button className="absolute transition duration-500 bg-white border-gray-400 
                                    h-8 w-8 rounded-full text-white border-2 
                                    border-white flex justify-center items-center opacity-80
                                    hover:opacity-60">
                                    </button>

                                    <i className="absolute mdi mdi-plus mdi-18px mx-1 text-gray-500"></i>
                                </div>
                                <span className="story-text font-medium">
                                    join
                                </span>
                            </li>
                            <li className="flex flex-col items-center space-y-2">
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>
                                </div>
                                <span className="story-text">
                                    jett
                                </span>
                            </li>

                            <li className="flex flex-col items-center space-y-2">
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>
                                </div>
                                <span className="story-text">
                                    sky
                                </span>
                            </li>
                            <li className="flex flex-col items-center space-y-2">
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>
                                </div>
                                <span className="story-text">
                                    omen
                                </span>
                            </li>
                            <li className="flex flex-col items-center space-y-2">
                                <div className="story-ring flex justify-center items-center
                                bg-gradient-to-tl from-yellow-200 to-orange-500 
                                rounded-full relative cursor-pointer
                                hover:from-orange-300 hover:to-red-400
                                transition-all duration-150 delay-100 
                                hover:animate-pulse">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full"
                                            src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" />
                                    </a>
                                </div>
                                <span className="story-text">
                                    sage
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  "
                    onClick={() => setDisplayModal(true)}
                >
                    <div className=" inline-block">
                        {" "}
                        <AiOutlinePlus size={30} />
                    </div>
                    <div className="text-center">สร้างห้อง</div>
                </button>
                <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  "
                    onClick={() => setKeyroomModal(true)}
                >
                    <div className=" inline-block">
                        {" "}
                        <AiOutlinePlus size={30} />
                    </div>
                    <div className="text-center">เข้าร่วมด้วยรหัส</div>
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
                </button> */}
            </div>


            {
                displayModal ? (
                    <div className="Modal ">
                        <div className="px-5 flex fixed inset-0  backdrop-filter backdrop-blur-md">
                            <div className="w-full mb-10 max-w-lg  mx-auto my-auto rounded-xl bg-white border-2">
                                <div className="">
                                    <div className="mx-auto w-full container p-6">
                                        <div className="grid grid-cols-2 text-white">
                                            <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  ">
                                                <div className=" inline-block justify-center">
                                                    <BsFillPeopleFill size={60} />
                                                    Public
                                                </div>
                                            </button>
                                            <button className="box-border p-4 m-2 rounded-lg bg-gray-600 ">
                                                <div className=" inline-block justify-center">
                                                    <RiChatPrivateLine size={60} />
                                                    Private
                                                </div>
                                            </button>
                                        </div>
                                        <button
                                            className="w-full mt-4 bg-blue-600 py-2 text-sm shadow-sm  text-white rounded-lg hover:shadow-lg hover:bg-blue-300"
                                            type="button"
                                        >
                                            {"Let's go"}
                                        </button>
                                        <button
                                            className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
                                            type="button"
                                            onClick={() => setDisplayModal(false)}
                                        >
                                            {"Cancel"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            } {" "}

            {
                keyroomModal ? (
                    <div className="Modal ">
                        <div className="px-5 flex fixed inset-0  backdrop-filter backdrop-blur-md">
                            <div className="w-full mb-10 max-w-lg  mx-auto my-auto rounded-xl bg-white border-2">
                                <div className="">
                                    <div className="mx-auto w-full container p-6">
                                        <input
                                            className="text-center mt-5 appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="text"
                                            name=""
                                            placeholder="code"
                                        />
                                        <button
                                            className="w-full mt-4 bg-blue-600 py-2 text-sm shadow-sm  text-white rounded-lg hover:shadow-lg hover:bg-blue-300"
                                            type="button"
                                        >
                                            {"Join"}
                                        </button>
                                        <button
                                            className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
                                            type="button"
                                            onClick={() => setKeyroomModal(false)}
                                        >
                                            {"Cancel"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            } {" "}
        </div>
    )
}
