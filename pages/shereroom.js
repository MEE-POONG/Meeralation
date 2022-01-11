import React from "react";

export default function Shereroom() {
  return (
    <div>
      <div className="">
        <div className="Modal ">
          <div className="px-5 flex fixed inset-0  backdrop-filter backdrop-blur-md">
            <div className="w-full mb-10 max-w-lg  mx-auto my-auto rounded-xl bg-white border-2">
              <div className="">
                <div className="mx-auto w-full container p-6">
                  <div className="grid grid-cols-2 text-white">
                  </div>
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
                  >
                    {"Cancel"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ) : null}{" "} */}
      </div>
    </div>
  );
}
