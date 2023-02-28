"use client"
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full px-10 bg-[#3A3C43]">
      <div className="flex items-center justify-center py-8">
        <div className="flex">
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
      </div>
      <section className="border-b "></section>
      <div className="flex items-center justify-between w-full h-64 ">
        <div className="grid items-center justify-center h-56 grid-flow-col grid-rows-4 gap-4 px-4 ">
          <p className="px-4 text-2xl font-medium">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
          <p className="px-4 text-2xl font-medium">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
          <p className="px-4 text-2xl font-medium">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
          <p className="px-4">About</p>
        </div>
        <div className="h-56 pt-2 text-center w-72">
          <p className="text-2xl font-medium">FOLLOW US</p>
          <div>
            <SocialIcon
              url="https://www.facebook.com/in/kian-murillo-623510165/"
              fgColor="white"
              bgColor="transparent"
              target="{_blank}"
            />{" "}
            <SocialIcon
              url="https://www.instagram.com/in/kian-murillo-623510165/"
              fgColor="white"
              bgColor="transparent"
              target="{_blank}"
            />{" "}
            <SocialIcon
              url="https://www.globe.com/in/kian-murillo-623510165/"
              fgColor="white"
              bgColor="transparent"
              target="{_blank}"
            />
          </div>
        </div>
      </div>
      <section className="border-b border-gray-200 "></section>
      <div className="flex items-center justify-center w-full h-20 text-base font-semibold">
        <span className="mr-2 text-base font-bold">@2023</span> All Rights
        Reserved.
      </div>
    </div>
  );
}

export default page;
