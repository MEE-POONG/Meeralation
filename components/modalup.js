import React, { useState } from "react";
import { AiOutlinePlus, AiOutlinePicture } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiChatPrivateLine } from "react-icons/ri";


export default function Modalup() {
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <div className="mx-auto w-full container mt-5">
            <div className="grid grid-cols-4  text-white ">
                <button className=" box-border p-4 m-2 rounded-lg bg-gray-600  "
                    onClick={() => setDisplayModal(true)}
                >
                    <div className=" inline-block">
                        {" "}
                        <AiOutlinePlus size={30} />
                    </div>
                    <div className="text-center">สร้างห้อง</div>
                </button>
                <button className="box-border h-32 p-4 m-2 rounded-lg bg-gray-600">
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
                </button>
                <button className="box-border h-32  p-4 m-2 rounded-lg bg-gray-600">
                    <div className=" inline-block">
                        {" "}
                        <AiOutlinePicture size={30} />
                        Rick White
                    </div>
                </button>
            </div>


            {displayModal ? (
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
            ) : null}{" "}
        </div>
    )
}
