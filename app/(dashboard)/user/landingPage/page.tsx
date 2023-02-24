"use client";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full h-full bg-red-400">
      <div className="flex items-center justify-center w-full text-6xl font-bold text-center bg-green-400 h-72">
        UNIVERSITY OF MAKATI
      </div>
      <div
        className="w-full h-full px-20 py-8 text-center bg-[#F8F306]
"
      >
        <p className="pt-5 text-4xl font-bold text-[#3A3C43]">
          Upcoming Events
        </p>
        <div className="grid items-center justify-center grid-cols-2 gap-6 py-6">
          <div className="flex flex-col items-center justify-center w-full h-56 bg-[#B8C0CC] rounded-3xl">
            <p className="text-xl font-medium text-[#3A3C43]">
              Faculty Orientation
            </p>
            <p className="text-xl font-medium text-[#3A3C43]">
              using TBL - Hub
            </p>
            <p className="text-4xl font-semibold text-[#3A3C43] mt-2">
              August 12, 2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-full h-56 bg-[#4B5768] rounded-3xl">
            {" "}
            <p className="text-xl font-medium">Faculty Orientation</p>
            <p className="text-xl font-medium">using TBL - Hub</p>
            <p className="mt-2 text-4xl font-semibold">August 12, 2023</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-56 bg-[#B8C0CC] rounded-3xl">
          {" "}
          <p className="text-[#3A3C43] text-xl font-medium">
            First Day of Classes for the First
          </p>
          <p className="text-[#3A3C43] text-xl font-medium">
            Semester Academic Year 2022-2023
          </p>
          <p className="text-4xl font-semibold text-[#3A3C43] mt-2">
            August 12, 2023
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-gray-200 via-gray-200 to-[#FFFFFF] h-96">
        <div className="flex flex-col items-start justify-center w-1/2 px-4 h-72">
          <p className="text-4xl font-semibold text-[#3A3C43] mb-4">About Us</p>
          <p className="pb-2 text-[#3A3C43]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="px-6 py-2 mt-4 bg-[#3A3C43] rounded-full">
            All courses
          </button>
        </div>

        <div className="grid w-1/2 grid-cols-2 gap-4 p-4 h-72">
          <div className="flex flex-col items-center justify-center h-full bg-[#B8C0CC] rounded-3xl shadow-2xl">
            <p className="text-4xl font-bold text-[#3A3C43]">14542</p>
            <p className="text-3xl font-semibold text-[#3A3C43]">Users</p>
          </div>
          <div className="flex flex-col items-center justify-center h-full bg-[#4B5768] rounded-3xl shadow-2xl">
            <p className="text-4xl font-bold">2000</p>
            <p className="text-3xl font-semibold">Courses</p>
          </div>
        </div>
      </div>

      {/* AVAILABLE COURSES */}

      <div className="w-full h-full bg-gradient-to-r from-[#FFFFFF] via-gray-200 to-gray-200">
        <p className="pt-10 font-bold text-black text -3xl pl-7">
          Available Courses
        </p>
        <div className="grid w-full grid-cols-3 gap-6 px-6 py-5 h-72 ">
          <div className="relative shadow-2xl rounded-2xl">
            <img
              className="absolute w-full h-full bg-blue-400 shadow-2xl rounded-2xl"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            ></img>
            <div className="absolute bottom-0 w-full px-4 py-4 bg-[#FFFFFF] rounded-bl-2xl rounded-br-2xl">
              <p className="text-lg font-semibold text-black text-white-defaultThree">
                Course #1
              </p>
              <p className="text-xs font-thin text-black text-white-defaultThree">
                Enrolled (2020-2021 | 1st Sem)
              </p>
            </div>
          </div>
          <div className="relative shadow-2xl rounded-2xl">
            <img
              className="absolute w-full h-full bg-blue-400 shadow-2xl rounded-2xl"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            ></img>
            <div className="absolute bottom-0 w-full px-4 py-4 bg-[#FFFFFF] rounded-bl-2xl rounded-br-2xl">
              <p className="text-lg font-semibold text-black text-white-defaultThree">
                Course #1
              </p>
              <p className="text-xs font-thin text-black text-white-defaultThree">
                Enrolled (2020-2021 | 1st Sem)
              </p>
            </div>
          </div>
          <div className="relative shadow-2xl rounded-2xl">
            <img
              className="absolute w-full h-full bg-blue-400 shadow-2xl rounded-2xl"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            ></img>
            <div className="absolute bottom-0 w-full px-4 py-4 bg-[#FFFFFF] rounded-bl-2xl rounded-br-2xl">
              <p className="text-lg font-semibold text-black text-white-defaultThree">
                Course #1
              </p>
              <p className="text-xs font-thin text-black text-white-defaultThree">
                Enrolled (2020-2021 | 1st Sem)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
