import { LockClosedIcon } from "@heroicons/react/solid";
import React from "react";

export default function Register() {
  return (
    <>
      <div className="container mx-auto max-w-lg py-10">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Mee Relation
        </h2>
        <div className="px-4 flex-auto">
          <div className="py-10  grid">
            <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white">
              <div className="max-w-md w-full space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  REGISTER
                </h2>
                <form className="w-full max-w-lg">
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Firstname"
                  />
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Lastname"
                  />
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="date"
                    type="date"
                    name=""
                  />

                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Email"
                  />
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name=""
                    placeholder="Password"
                  />
                  
                  <div className="py-5">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
