import React from "react";
import {
  AiOutlineBell,
  AiOutlineCloudDownload,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import {
  BiHomeAlt,
  BiMessageRounded,
  BiShoppingBag,
  BiUserPlus,
} from "react-icons/bi";
import { MdOutlineAnnouncement, MdOutlineQuiz } from "react-icons/md";
import { SlNotebook } from "react-icons/sl";
import { BsCalendarDate } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";

type Props = {};

function page({}: Props) {
  return (
    <div className="grid items-center justify-around h-full grid-flow-row grid-cols-1 gap-2 px-4 py-6 text-center bg-white w-72">
      <p className="text-2xl font-extrabold text-black">NAVIGATION</p>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BiHomeAlt className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Dashboard</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BiHomeAlt className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">My Class</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <AiOutlineBell className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Notifications</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BiMessageRounded className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Messages</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BiShoppingBag className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Backpack</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <AiOutlineCloudDownload className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Downloadables</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <MdOutlineAnnouncement className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Announcement</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <SlNotebook className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Assignments</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <MdOutlineQuiz className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Quiz/Exam</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BiUserPlus className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Share Files</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <BsCalendarDate className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Calendar</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <AiOutlineUnorderedList className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">School Year</p>
      </div>
      <div className="flex items-center justify-start h-10 pl-8 my-1">
        <FiActivity className="w-8 h-8 mx-4 text-black" />
        <p className="font-semibold text-black">Activity log</p>
      </div>
    </div>
  );
}

export default page;
