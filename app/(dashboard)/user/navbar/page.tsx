"use client";
import React from "react";

const page = () => {
  return (
    <header className="flex items-center justify-between w-full h-32 px-4 bg-[#3A3C43]">
      <div className="flex ">
        <div className="w-12 h-12 text-center ">
          <img src="https://tbl.umak.edu.ph/pluginfile.php/1/core_admin/logo/0x200/1602730217/1024px-University_of_Makati_Logo.png" />
        </div>
        <div className="pl-4">
          <p className="font-semibold">UNIVERSITY OF MAKATI</p>
          <span className="text-xs font-semibold">
            Technology Base Learning Hub
          </span>
        </div>
      </div>

      <div className="px-4 py-2 font-semibold text-black bg-white rounded-full">
        Log In
      </div>
    </header>
  );
};

export default page;
