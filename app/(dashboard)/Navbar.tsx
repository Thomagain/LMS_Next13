"use client";
import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <header className="flex items-center justify-between w-full py-2 px-5 bg-[#3A3C43]">
      <div className="flex p-2">
        <div className="w-12 h-12 text-center ">
          <img src="https://tbl.umak.edu.ph/pluginfile.php/1/core_admin/logo/0x200/1602730217/1024px-University_of_Makati_Logo.png" />
        </div>
        <div className="py-1 pl-2">
          <div className="font-semibold text-white">UNIVERSITY OF MAKATI</div>
          <div className="text-xs font-semibold text-white">
            Technology Base Learning Hub
          </div>
        </div>
      </div>

      <div className="px-3 py-1 text-sm font-semibold bg-white rounded-full">
        <Link href="/login">Log in</Link>
      </div>
    </header>
  );
};

export default navbar;
