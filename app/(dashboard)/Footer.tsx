import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function footer({}: Props) {
  return (
    <div className="w-full px-10 bg-[#3A3C43]  text-white">
      <div className="flex items-center justify-center py-5">
        <div className="flex text-center">
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
      </div>
      <section className="border-b "></section>
      <div className="flex items-center justify-between w-full h-52 ">
        <div className="grid items-center justify-center grid-flow-col grid-rows-4 gap-3 px-4 ">
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
        <div className="h-56 pt-6 text-center">
          <div className="text-2xl font-medium">FOLLOW US</div>
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
      <div className="flex items-center justify-center w-full text-base font-semibold h-14">
        <span className="mr-2 text-base font-bold">@2023</span> All Rights
        Reserved.
      </div>
    </div>
  );
}

export default footer;
