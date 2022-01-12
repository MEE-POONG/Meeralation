import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function Modalshereroom() {
  const [displayModal, setDisplayModal] = useState(false);
  return (
    <div>
      <div className="">
        <div className="">
        <div className="flex justify-between">
          <button onClick={() => setDisplayModal(true)}>
            <BiDotsHorizontalRounded size={40} />{" "}
          </button>
        </div>

          {displayModal ? (
            <div className="px-5 flex fixed inset-0  backdrop-filter backdrop-blur-md">
              <div className="w-full mb-10 max-w-lg  mx-auto my-auto rounded-xl bg-white border-2">
                <div className="">
                  <div className="mx-auto w-full container p-6">
                    <div className="grid grid-cols-2 text-white"></div>
                    <button
                      className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
                      type="button"
                    >
                      {"Shere Room"}
                    </button>
                    <button
                      className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
                      type="button"
                    >
                      {"Add"}
                    </button>
                    <button
                      className="w-full mt-4 bg-white border-2 py-2 text-sm shadow-sm  text-black rounded-lg hover:shadow-lg hover:bg-white"
                      type="button"
                    >
                      {"Leave"}
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
          ) : null}{" "}
        </div>
      </div>
    </div>
  );
}
