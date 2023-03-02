import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="flex items-center justify-center h-screen bg-bgImage">
      <div className="flex justify-center bg-white shadow-xl rounded-3xl w-80 ">
        <div className="flex flex-col w-64 h-full">
          <div className="flex justify-center pt-8 pb-5">
            <Link href="/">
              <img className="w-28 h-28" src="image/icon.png" alt="Icon" />
            </Link>
          </div>
          <div className="pb-5 text-xl font-semibold text-center">
            LOG IN TO YOUR ACCOUNT
          </div>
          <div className="pb-10">
            <input
              className="w-full py-2 leading-tight border-b-2 border-gray-400 appearance-none focus:outline-none"
              type="text"
              name="Student Number"
              placeholder="Student Number"
            />
          </div>
          <div className="pb-5">
            <input
              className="w-full py-2 leading-tight border-b-2 border-gray-400 appearance-none focus:outline-none"
              type="text"
              name="Student Number"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-row justify-between pb-5 text-sm font-semibold">
            <div>
              <Link href="/forgotPassword">Forgot Password?</Link>
            </div>
            <div>
              <button>Remember me</button>
            </div>
          </div>
          <div className="flex justify-center p-1 text-md text-white bg-[#3A3C43] rounded-3xl ">
            <Link href="user/mycourses">Login</Link>
          </div>
          <div className="pt-5 pb-5 text-sm">
            Don't have an account?
            <Link href="/register" className="font-bold">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
